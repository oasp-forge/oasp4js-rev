// import {LoginService} from '../../components/login/service/Login.service';
// import {it, describe, expect, beforeEach, inject, beforeEachProviders} from '@angular/core/testing';
// import {Component, Output, EventEmitter, OnInit, ChangeDetectorRef} from '@angular/core'
// import {User} from '../../models/user/User.model'
//
// describe('\nLoginService [SERVICE]: \n', () => {
//     let service;
//     let users;
//
//     //setup
//     beforeEachProviders(() => [LoginService]);
//
//     beforeEach(inject([LoginService], s => {
//       service = s;
//       users = service.getUsers();
//     }));
//
//     //specs
//     it('[TEST_ERROR] LoginService should be defined!', () => {
//       expect(service).toBeDefined();
//     });
//
//     it('[TEST_ERROR] typeof USERS should be [object Array]!', () => {
//       expect(Object.prototype.toString.call(users)).toBe('[object Array]');
//     });
//
//     it('[TEST_ERROR] items of USERS should be instances of class User!', () => {
//       let index = Math.floor((Math.random() * users.length) + 0);
//       expect(users[index] instanceof User).toBe(true);
//     })
//
// });
