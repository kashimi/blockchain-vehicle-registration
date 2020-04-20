/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for blockchain-vehicle-registration', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be blockchain-vehicle-registration', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('blockchain-vehicle-registration');
    })
  });

  it('network-name should be driveloop@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('driveloop@0.0.1.bna');
    });
  });

  it('navbar-brand should be blockchain-vehicle-registration',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('blockchain-vehicle-registration');
    });
  });

  
    it('Order component should be loadable',() => {
      page.navigateTo('/Order');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Order');
      });
    });

    it('Order table should have 5 columns',() => {
      page.navigateTo('/Order');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Vehicle component should be loadable',() => {
      page.navigateTo('/Vehicle');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Vehicle');
      });
    });

    it('Vehicle table should have 4 columns',() => {
      page.navigateTo('/Vehicle');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Manufacturer component should be loadable',() => {
      page.navigateTo('/Manufacturer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Manufacturer');
      });
    });

    it('Manufacturer table should have 3 columns',() => {
      page.navigateTo('/Manufacturer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Dealer component should be loadable',() => {
      page.navigateTo('/Dealer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Dealer');
      });
    });

    it('Dealer table should have 4 columns',() => {
      page.navigateTo('/Dealer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('InsuranceAgency component should be loadable',() => {
      page.navigateTo('/InsuranceAgency');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('InsuranceAgency');
      });
    });

    it('InsuranceAgency table should have 4 columns',() => {
      page.navigateTo('/InsuranceAgency');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('RegistrationAuthority component should be loadable',() => {
      page.navigateTo('/RegistrationAuthority');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RegistrationAuthority');
      });
    });

    it('RegistrationAuthority table should have 4 columns',() => {
      page.navigateTo('/RegistrationAuthority');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Police component should be loadable',() => {
      page.navigateTo('/Police');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Police');
      });
    });

    it('Police table should have 4 columns',() => {
      page.navigateTo('/Police');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Customer component should be loadable',() => {
      page.navigateTo('/Customer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Customer');
      });
    });

    it('Customer table should have 5 columns',() => {
      page.navigateTo('/Customer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  

});