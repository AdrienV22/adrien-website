import { Component } from "@angular/core";

@Component({
  selector: "hello-card",
  standalone: true,
  template: `
    <div style="
      padding: 16px;
      border-radius: 12px;
      background: white;
      box-shadow: 0 10px 30px rgba(0,0,0,.08);
      max-width: 360px;
    ">
      <h3 style="margin:0 0 6px;">Angular fonctionne 🎉</h3>
      <p style="margin:0;color:#555;">
        Ce composant Angular est rendu dans Astro via une île.
      </p>
    </div>
  `,
})
export class HelloCardComponent {}
