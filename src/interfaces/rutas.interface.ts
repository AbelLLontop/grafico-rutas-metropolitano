export interface ConfiguracionTransporte {
    stations: string[]
    routes: Route[]
  }
  
  export interface Route {
    name: string
    subName: string
    type: string
    turn: string
    schedule: Schedule
    stations: string[]
  }
  
  export interface Schedule {
    NS: string
    SN: string
  }
  