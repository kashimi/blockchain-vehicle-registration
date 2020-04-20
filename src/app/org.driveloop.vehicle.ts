import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.driveloop.vehicle{
   export class Vehicle extends Asset {
      vin: string;
      vehicleDetails: VehicleDetails;
      vehicleStatus: VehicleStatus;
   }
   export enum VehicleStatus {
      UNDER_MANUFACTURER,
      UNDER_DEALERSHIP,
      ACTIVE,
      OFF_THE_ROAD,
      SCRAPPED,
   }
   export class VehicleDetails {
      make: string;
      modelType: string;
      model: string;
      variant: string;
      chassisNumber: string;
      engineNumber: string;
      colour: string;
      manufacturingYear: string;
      bodyWeight: string;
   }
// }
