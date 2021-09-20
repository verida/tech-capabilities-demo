import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    interface Window {
      Prism: any;
    }
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
