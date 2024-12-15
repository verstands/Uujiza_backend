import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PharmacieDto } from 'src/dto/pharmaciedto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PharmacieService {
  constructor(private readonly prismaservice: PrismaService) { }

  async getAll() {
    const getall = await this.prismaservice.pharmacices.findMany({
      orderBy: {
        id: "desc"
      },
      include: {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true,
        agents : true,
      }
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async getFindUserID({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findFirst({
      where: {
        agentsId : id,
      },
      include : {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true
      }
    });
    return { data: getid };
  }

  async getFindQuartier({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findMany({
      where: {
        id_quartier: id,
        id_user : '0'
      },
      include: {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true,
        agents : true
      }

    });
    return { data: getid };
  }

  async getPharmaciceUser({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findFirst({
      where: {
        agentsId: id,
      },
      include: {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true,
        agents : true
      }
    });
    return { data: getid };
  }

  async getMymedicamentUser({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findMany({
      where : {
        pharmacie : {
          agentsId : id
        }
      },
      include  :{
        pharmacie : {
          include : {
            agents : true,
            commune :true
          }
        }
      }
    });
    return { data: getid };
  }

  async update({ id, nom, communeavenu }: { id: string; nom: string; communeavenu: string }) {
    const updatedPharmacie = await this.prismaservice.pharmacices.update({
      where: {
        id,  
      },
      data: {
        nom: nom, 
        communeavenu: communeavenu,
      },
    });
  
    return { message: 'Pharmacie modifiée avec succès' }; 
  }
  

  async delete({ id }: { id: string }) {
    // Étape 1 : Supprimer les recherches associées aux produits de la pharmacie
    await this.prismaservice.recherche.deleteMany({
      where: {
        produit: {
          id_pharmacie: id, // Filtrer par pharmacie via produit
        },
      },
    });
  
    // Étape 2 : Supprimer les produits associés à la pharmacie
    await this.prismaservice.produits.deleteMany({
      where: {
        id_pharmacie: id,
      },
    });
  
    // Étape 3 : Supprimer la pharmacie elle-même
    await this.prismaservice.pharmacices.delete({
      where: {
        id,
      },
    });
  
    return { message: 'Pharmacie et ses relations supprimées avec succès.' };
  }
  
  

  async create(dataall: PharmacieDto) {
    const pharmacies = await this.prismaservice.pharmacices.findMany({
      where: {
        agentsId: dataall.agentsId, 
      },
    });
    if (pharmacies.length > 0) {
      throw new HttpException("Vous avez déjà une pharmacie !", HttpStatus.CONFLICT);
    }
    const createAgent = await this.prismaservice.pharmacices.create({
      data: dataall,
    });
  
    return createAgent;  
  }

  async activer({ id }: { id: string}) {
    const updatedPharmacie = await this.prismaservice.pharmacices.update({
      where: {
        id,  
      },
      data: {
        id_user: "1", 
      },
    });
  
    return { message: 'Pharmacie a été activé' }; 
  }

  async desactiver({ id }: { id: string}) {
    const updatedPharmacie = await this.prismaservice.pharmacices.update({
      where: {
        id,  
      },
      data: {
        id_user: "0", 
      },
    });
  
    return { message: 'Pharmacie a été desactivé' }; 
  }
  
  
}
