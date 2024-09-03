
// Modele d'une tache
export class TaskModel {
  titre!: string;
  description!: string;
  date!: Date;
  etat!: Etat;
}

// Etat possible pour une tache
export enum Etat {
  EN_COURS = 'en cours',
  A_FAIRE = 'à faire',
  TERMINEE = 'terminée'
}
