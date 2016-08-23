// import {Component, Compiler, ViewContainerRef, ViewChild, ComponentRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core'
//
//
// @Component({
//   selector: 'modal-dialog2',
//   template: `
//     <div>
//       <h2>Dynamically Add Elements</h2>
//       <div #placeholder></div>
//     </div>
//   `
//   // templateUrl: 'app/src/oasp/oasp-ui/modal-dialog2/modal-dialog2.html',
// })
// export class App {
//   @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
//   private componentFactory: ComponentFactory<any>;
//
//   constructor(componentFactoryResolver: ComponentFactoryResolver, compiler: Compiler) {
//     //this.componentFactory = componentFactoryResolver.resolveComponentFactory(HelloComponent);
//     this.componentFactory = compiler.compileComponentSync(HelloComponent);
//   }
// }
