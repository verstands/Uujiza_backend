import { Injectable } from '@nestjs/common';
import { ProduitDto } from 'src/dto/produit.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProduitService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.produits.findMany({
      orderBy : {
        id : "desc"
      },
      include : {
        pharmacie : {
          include : {
            agents : true,
            commune : true,
          }
        },
      }
      
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findUnique({
      where: {
        id,
      },
      include : {
        pharmacie : {
          include : {
            agents : true,
            commune : true,
          }
        },
      }
    });
    return { data: getid };
  }

  async getCountMedicament({ id }: { id: string }) {
    const pharmacie = await this.prismaservice.pharmacices.findFirst({
      where: {
        agentsId: id,
      },
    });
    if (!pharmacie) {
      return { count: 0 };
    }
    const count = await this.prismaservice.produits.count({
      where: {
        id_pharmacie: pharmacie.id, 
      },
    });
    console.log(count);
  
    return { count }; 
  }

  async getTotalPriceMedicament({ id }: { id: string }) {
    // Recherche de la pharmacie associée à l'agent
    const pharmacie = await this.prismaservice.pharmacices.findFirst({
      where: {
        agentsId: id,
      },
    });
  
    if (!pharmacie) {
      return { total: 0 };
    }
  
    // Récupère tous les produits pour cette pharmacie
    const produits = await this.prismaservice.produits.findMany({
      where: {
        id_pharmacie: pharmacie.id,
      },
      select: {
        prix: true, 
      },
    });
    const totalPrix = produits.reduce((total, produit) => {
      const prixNumerique = parseFloat(produit.prix as unknown as string); // Conversion explicite en float
      return total + (isNaN(prixNumerique) ? 0 : prixNumerique); 
    }, 0);
  
    return { total: totalPrix };
  }
  
  
  async getFindMedicamentQuartier({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findMany({
      where: {
        pharmacie : {
          id_quartier : id
        },
      },
      include : {
        pharmacie : {
          include : {
            agents : true,
            commune : true,
          }
        },
      }
    });
    console.log(getid)
    return { data: getid };
  }


  async getFindPharmacie({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findMany({
      where: {
        id_pharmacie : id,
      },
      include : {
        pharmacie : {
          include : {
            agents : true,
            commune : true,
          }
        },
      }
    });
    return { data: getid };
  }

  async update({ id, nom, dosage, prix,  description }: { id: string; nom: string, dosage: string, prix : string, description:string  }) {
    const updatedAgent = await this.prismaservice.produits.update({
      where: {
        id,
      },
      data: {
        nom : nom,
        dosage : dosage,
        prix : prix,
        description : description
      },
    });
    return updatedAgent;
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.recherche.deleteMany({
      where: {
        id_produit: id
      },
    });
    await this.prismaservice.produits.delete({
      where: {
        id,
      },
    });
    return { message: 'pharmacie supprimé avec success ' };
  }

  async create(dataall: ProduitDto) {
    const createAgent = await this.prismaservice.produits.create({
      data:  dataall
    });
    return createAgent;
  }

  async createRecherche(date : string, id_pharmacie : string, id_produit) {
    const createAgent = await this.prismaservice.recherche.create({
      data:  {
        id_pharmacie : id_pharmacie,
        id_produit : id_produit,
        date : date
      }
    });
    return createAgent;
  }

  async getTopMedicamentsByViews(ville: string) {
    const startOfWeek = new Date();
    startOfWeek.setDate(new Date().getDate() - new Date().getDay());
  
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  
   
    const topMedicamentsWeek = await this.prismaservice.recherche.groupBy({
      by: ['id_produit'],  
      where: {
        pharmacie: {
          idville: ville,
        },
        date: {
          gte: startOfWeek.toISOString(),
        },
      },
      _count: {
        id_produit: true, 
      },
      orderBy: {
        _count: {
          id_produit: 'desc',
        },
      },
      take: 10,
    });
  
    const topMedicamentsMonth = await this.prismaservice.recherche.groupBy({
      by: ['id_produit'],
      where: {
        pharmacie: {
          idville: ville,
        },
        date: {
          gte: startOfMonth.toISOString(),
        },
      },
      _count: {
        id_produit: true,
      },
      orderBy: {
        _count: {
          id_produit: 'desc',
        },
      },
      take: 10,
    });
  
    const topMedicamentsWeekDetails = await this.fetchMedicamentsDetails(topMedicamentsWeek);
    const topMedicamentsMonthDetails = await this.fetchMedicamentsDetails(topMedicamentsMonth);
  
    return { semaine: topMedicamentsWeekDetails, mois: topMedicamentsMonthDetails };
  }
 
  private async fetchMedicamentsDetails(medicaments: Array<{ id_produit: string; _count: { id_produit: number } }>) {
    const ids = medicaments.map((m) => m.id_produit);
  
    return this.prismaservice.produits.findMany({
      where: { id: { in: ids } },
      include: {
        pharmacie: true,
      },
    });
  }
  
  
  
  
}
