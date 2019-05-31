import { Robot } from '../models/Robot.model';

export const ROBOTS: Robot[] = [
  { 
    id: 1,
    name: "bet365.prematch",
    type: "prematch",
    architecture: "newInfra",
    sportCoverage: "all",
    developer: "Hodaya",
    productNotes: "string",
    devNotes: "don't restart",
    newInfrastatus: "runing in NewInfra",
    activeV3: false,
    activeV4: true,
    comments: "none"
  },
  { 
    id: 2,
    name: "betway.prematch",
    type: "prematch",
    architecture: "newInfra",
    sportCoverage: "all",
    developer: "Nizan Rosh",
    productNotes: "string",
    devNotes: "restart anytime",
    newInfrastatus: "runing in NewInfra",
    activeV3: false,
    activeV4: true,
    comments: "none"
  },
  { 
    id: 3,
    name: "Bwin.prematch",
    type: "prematch",
    architecture: "newInfra",
    sportCoverage: "all",
    developer: "Oz Avraham",
    productNotes: "string",
    devNotes: "restart anytime",
    newInfrastatus: "runing in NewInfra",
    activeV3: false,
    activeV4: true,
    comments: "none"
  }
  
];