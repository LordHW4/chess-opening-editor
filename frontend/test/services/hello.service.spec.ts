import 'reflect-metadata';
import 'rxjs/add/operator/toPromise';
import 'mocha';
import 'chai';
import { HelloService } from '../../src/app/services/hello.service';
import chaiSpies from 'chai-spies';
let chai = require('chai');
let expect = chai.expect;
chai.use(require('chai-spies'));
describe('HelloService', () => {
    describe('.hello()', () => {
      let component = new HelloService();
      it ('should return hello!', () =>  {
          expect(component.hello()).equal('Hello !');
      });
    });
});
