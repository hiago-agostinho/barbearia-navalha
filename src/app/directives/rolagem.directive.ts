import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
    constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

    @HostListener('window:scroll')
    onScroll() {
        const sections: NodeListOf<HTMLElement> = document.querySelectorAll('div[id^="section"]');
    
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect();
            const id = section.id;

            if (sectionPosition.top <= 50) {
                const navLink = document.querySelector(`a[href="#${id}"]`);

                if (navLink) {
                    const parentElement = (navLink as HTMLElement).parentElement;
                    this.renderer.addClass(parentElement, 'active');
                }
            }
            else {
                const navLink = document.querySelector(`a[href="#${id}"]`);

                if (navLink) {
                    const parentElement = (navLink as HTMLElement).parentElement;
                    this.renderer.removeClass(parentElement, 'active');
                }
            }
        });
    }
}