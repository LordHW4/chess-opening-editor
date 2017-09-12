import 'reflect-metadata';
import 'rxjs/add/operator/toPromise';
import { HomeComponent } from '../../src/app/pages/home/home.component';
import { expect } from 'chai';

describe('HomeComponent', () => {
    describe('.constructor()', () => {
        let component = new HomeComponent();
        it('should have a constructor', async() => {
            expect(component).to.respondTo('constructor');
        });
        it('should create a object', async() => {
            expect(component).to.be.a('object');
        });
    });
});
