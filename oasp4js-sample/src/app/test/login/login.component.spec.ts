import {LoginService} from '../../components/login/service/Login.service';
import {LoginComponent} from '../../components/login/view/Login.component';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {Component, Output, EventEmitter, OnInit, ChangeDetectorRef} from '@angular/core'
import {User} from '../../models/user/User.model'

describe('\nLoginComponent [COMPONENT]: \n', () => {
    let component:LoginComponent;
    let service:LoginService = new LoginService();
    let loginEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
    let userEvent:EventEmitter<User> = new EventEmitter<User>();

    //setup
    beforeEach(() => {
      component = new LoginComponent(service);
      loginEvent = component.loginEvent;
      userEvent = component.userEvent;

      spyOn(component, 'validateLogin');

      component.validateLogin('username', 'password');

    });

    //specs
    it('[TEST_ERROR] LoginComponent should be defined!', () => {
      expect(component).toBeDefined();
    });

    it('[TEST_ERROR] typeof loginEvent should be EventEmitter<>!', () => {
      expect(loginEvent instanceof EventEmitter).toBe(true);
    });

    it('[TEST_ERROR] typeof userEvent should be EventEmitter<>!', () => {
      expect(userEvent instanceof EventEmitter).toBe(true);
    });

    it('[TEST_ERROR] validateLogin should have been called!', () => {
      expect(component.validateLogin).toHaveBeenCalled();
    });

    it('[TEST_ERROR] validateLogin should have been called with => (\'username\', \'password\')', () => {
      expect(component.validateLogin).toHaveBeenCalledWith('username', 'password');
    });

});
