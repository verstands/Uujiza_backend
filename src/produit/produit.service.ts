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
         pharmacie : true,
      }
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findUnique({
      where: {
        id,
      },
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
  
  
  


  async getFindPharmacie({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findMany({
      where: {
        id_pharmacie : id,
      },
      include : {
        pharmacie : true,
      }
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & ProduitDto) {
    const updatedAgent = await this.prismaservice.produits.update({
      where: {
        id,
      },
      data: {
        ...agentUpdate,
      },
    });
    return updatedAgent;
  }

  async delete({ id }: { id: string }) {
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
}
