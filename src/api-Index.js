import { 
  tempAll,tempHistory
} from "./server-api/temp.js"

import { 
  machineAll,machineHistory
} from "./server-api/machine.js"


export const apiTempAll = tempAll
export const apiTempHistory = tempHistory
export const apimMachineAll = machineAll
export const apiMachineHistory = machineHistory
export const API_ADDRESS = "192.168.1.100"