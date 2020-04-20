import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.driveloop.participant{
   export abstract class DriveloopParticipant extends Participant {
      participantId: string;
   }
   export class Contact {
      email: string;
      address: string;
   }
   export class Make {
      name: string;
      registrationId: string;
   }
   export class Manufacturer extends DriveloopParticipant {
      make: Make;
   }
   export class Dealer extends DriveloopParticipant {
      dealerName: string;
      contact: Contact;
   }
   export class InsuranceAgency extends DriveloopParticipant {
      companyName: string;
      contact: Contact;
   }
   export class RegistrationAuthority extends DriveloopParticipant {
      officerName: string;
      signatureToken: string;
   }
   export class Police extends DriveloopParticipant {
      officerName: string;
      signatureToken: string;
   }
   export class Customer extends DriveloopParticipant {
      fname: string;
      lname: string;
      contact: Contact;
   }
// }
