import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1,  name: 'G. Bufon' },
      { id: 2, name: 'D. Carvajal' },
      { id: 3, name: 'G. Chiellini' },
      { id: 4, name: 'S. Ramos' },
      { id: 5, name: 'D. Alves' },
      { id: 6, name: 'S. Busquets' },
      { id: 7, name: 'L. Modrić' },
      { id: 8, name: 'A. Iniesta' },
      { id: 9, name: 'Neymar' },
      { id: 10, name: 'L. Messi' },
      { id: 11, name: 'C. Ronaldo' }
    ];
    return {heroes};
  }
}