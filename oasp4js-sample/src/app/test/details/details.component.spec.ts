import {DetailsComponent} from '../../components/details/view/Details.component';
import {DetailsService} from '../../components/details/service/Details.service';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {Command} from '../../models/command/Command.model'

describe('\nDetailsComponent [COMPONENT]: \n', () => {
    let component:DetailsComponent;
    let service:DetailsService = new DetailsService();


    beforeEach(() => {
        component = new DetailsComponent(service);
    });

    it('[TEST_ERROR] DetailsComponent should be defined!', () => {
      expect(component).toBeDefined();
    });
});
