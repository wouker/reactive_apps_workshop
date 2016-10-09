/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '@angular/platform-browser/src/browser/title';
import * as import2 from './application.container';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '../../app.sandbox';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/router/src/directives/router_outlet';
import * as import17 from '../../../common/components/spinner/spinner.component';
import * as import18 from '@angular/common/src/pipes/async_pipe';
import * as import19 from '@angular/router/src/router_outlet_map';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
import * as import21 from '../../../common/components/spinner/spinner.component.ngfactory';
import * as import22 from '../../../common/components/navbar/navbar.component';
import * as import23 from '../../../common/components/navbar/navbar.component.ngfactory';
  const nodeDebugInfos_ApplicationContainer_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([
    import1.Title,
    import2.ApplicationContainer
  ]
,import2.ApplicationContainer,{})];
var renderType_ApplicationContainer_Host:import3.RenderComponentType = (null as any);
class _View_ApplicationContainer_Host0 extends import4.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _Title_0_4:import1.Title;
  _ApplicationContainer_0_5:import2.ApplicationContainer;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ApplicationContainer_Host0,renderType_ApplicationContainer_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer_Host0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.selectOrCreateHostElement('application',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApplicationContainer0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Title_0_4 = new import1.Title();
    this._ApplicationContainer_0_5 = new import2.ApplicationContainer(this._Title_0_4,this.parentInjector.get(import10.AppSandbox),this.parentInjector.get(import11.Router));
    this._appEl_0.initComponent(this._ApplicationContainer_0_5,[],compView_0);
    compView_0.create(this._ApplicationContainer_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Title) && (0 === requestNodeIndex))) { return this._Title_0_4; }
    if (((token === import2.ApplicationContainer) && (0 === requestNodeIndex))) { return this._ApplicationContainer_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ApplicationContainer_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(0,0,0);
    this._ApplicationContainer_0_5.ngOnDestroy();
  }
}
function viewFactory_ApplicationContainer_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<any> {
  if ((renderType_ApplicationContainer_Host === (null as any))) { (renderType_ApplicationContainer_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_ApplicationContainer_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApplicationContainerNgFactory:import13.ComponentFactory<import2.ApplicationContainer> = new import13.ComponentFactory<import2.ApplicationContainer>('application',viewFactory_ApplicationContainer_Host0,import2.ApplicationContainer);
const styles_ApplicationContainer:any[] = [];
const nodeDebugInfos_ApplicationContainer0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import14.TemplateRef,
    import15.NgIf
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import16.RouterOutlet],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import17.SpinnerComponent],import17.SpinnerComponent,{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_ApplicationContainer:import3.RenderComponentType = (null as any);
class _View_ApplicationContainer0 extends import4.DebugAppView<import2.ApplicationContainer> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import5.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import15.NgIf;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import5.AppElement;
  _RouterOutlet_3_5:import16.RouterOutlet;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import5.AppElement;
  _SpinnerComponent_5_4:import17.SpinnerComponent;
  _text_6:any;
  _pipe_async_0:import18.AsyncPipe;
  /*private*/ _expr_0:any;
  _pipe_async_1:import18.AsyncPipe;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ApplicationContainer0,renderType_ApplicationContainer,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer0);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(0,0,0));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(1,1,8));
    this._appEl_1 = new import5.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import14.TemplateRef_(this._appEl_1,viewFactory_ApplicationContainer1);
    this._NgIf_1_6 = new import15.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(2,1,103));
    this._el_3 = this.renderer.createElement(parentRenderNode,'router-outlet',this.debug(3,2,8));
    this._appEl_3 = new import5.AppElement(3,(null as any),this,this._el_3);
    this._RouterOutlet_3_5 = new import16.RouterOutlet(this.parentInjector.get(import19.RouterOutletMap),this._appEl_3.vcRef,this.parentInjector.get(import20.ComponentFactoryResolver),(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n        ',this.debug(4,2,39));
    this._el_5 = this.renderer.createElement(parentRenderNode,'spinner',this.debug(5,3,8));
    this._appEl_5 = new import5.AppElement(5,(null as any),this,this._el_5);
    var compView_5:any = import21.viewFactory_SpinnerComponent0(this.viewUtils,this.injector(5),this._appEl_5);
    this._SpinnerComponent_5_4 = new import17.SpinnerComponent();
    this._appEl_5.initComponent(this._SpinnerComponent_5_4,[],compView_5);
    compView_5.create(this._SpinnerComponent_5_4,[],(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(6,3,50));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import18.AsyncPipe(this.ref);
    this._expr_0 = import9.UNINITIALIZED;
    this._pipe_async_1 = new import18.AsyncPipe(this.ref);
    this._expr_1 = import9.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import15.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    if (((token === import16.RouterOutlet) && (3 === requestNodeIndex))) { return this._RouterOutlet_3_5; }
    if (((token === import17.SpinnerComponent) && (5 === requestNodeIndex))) { return this._SpinnerComponent_5_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    const valUnwrapper:any = new import9.ValueUnwrapper();
    this.debug(1,1,63);
    valUnwrapper.reset();
    const currVal_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.isAuthenticated$));
    if ((valUnwrapper.hasWrappedValue || import6.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this._NgIf_1_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.debug(5,3,8);
    changed = false;
    this.debug(5,3,17);
    valUnwrapper.reset();
    const currVal_1:any = valUnwrapper.unwrap(this._pipe_async_1.transform(this.context.isBusy$));
    if ((valUnwrapper.hasWrappedValue || import6.checkBinding(throwOnChange,this._expr_1,currVal_1))) {
      this._SpinnerComponent_5_4.spin = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) { this._appEl_5.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(3,2,8);
    this._RouterOutlet_3_5.ngOnDestroy();
    this.debug(5,3,8);
    this._pipe_async_0.ngOnDestroy();
    this._pipe_async_1.ngOnDestroy();
  }
}
export function viewFactory_ApplicationContainer0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<import2.ApplicationContainer> {
  if ((renderType_ApplicationContainer === (null as any))) { (renderType_ApplicationContainer = viewUtils.createRenderComponentType('/Users/brechtbilliet/Documents/nflow_projects/github/winecellar/src/app/containers/application/application.container.ts class ApplicationContainer - inline template',0,import12.ViewEncapsulation.None,styles_ApplicationContainer,{})); }
  return new _View_ApplicationContainer0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_ApplicationContainer1:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import22.NavbarComponent],import22.NavbarComponent,{})];
class _View_ApplicationContainer1 extends import4.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _NavbarComponent_0_4:import22.NavbarComponent;
  _pipe_async_0:import18.AsyncPipe;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ApplicationContainer1,renderType_ApplicationContainer,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ApplicationContainer1);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'navbar',this.debug(0,1,8));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import23.viewFactory_NavbarComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavbarComponent_0_4 = new import22.NavbarComponent();
    this._appEl_0.initComponent(this._NavbarComponent_0_4,[],compView_0);
    compView_0.create(this._NavbarComponent_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'logout',this.eventHandler(this._handle_logout_0_0.bind(this)));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import18.AsyncPipe(this.parent.ref);
    this._expr_1 = import9.UNINITIALIZED;
    const subscription_0:any = this._NavbarComponent_0_4.logout.subscribe(this.eventHandler(this._handle_logout_0_0.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.NavbarComponent) && (0 === requestNodeIndex))) { return this._NavbarComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    const valUnwrapper:any = new import9.ValueUnwrapper();
    this.debug(0,1,8);
    changed = false;
    this.debug(0,1,16);
    valUnwrapper.reset();
    const currVal_1:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.parent.context.account$));
    if ((valUnwrapper.hasWrappedValue || import6.checkBinding(throwOnChange,this._expr_1,currVal_1))) {
      this._NavbarComponent_0_4.account = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(0,1,8);
    this._pipe_async_0.ngOnDestroy();
  }
  private _handle_logout_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(0,1,43);
    const pd_0:any = ((<any>this.parent.context.logout()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ApplicationContainer1(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import4.AppView<any> {
  return new _View_ApplicationContainer1(viewUtils,parentInjector,declarationEl);
}