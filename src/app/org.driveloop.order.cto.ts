import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Vehicle} from './org.driveloop.vehicle';
// export namespace org.driveloop.order.cto{
   export class Order extends Asset {
      orderId: string;
      vehicle: Vehicle;
      orderStatus: OrderStatus;
      options: Options;
   }
   export class Options {
      trim: string;
      interior: string;
      extras: string[];
   }
   export enum OrderStatus {
      PLACED,
      SCHEDULED_FOR_MANUFACTURE,
      VIN_ASSIGNED,
      OWNER_ASSIGNED,
      DELIVERED,
   }
// }
