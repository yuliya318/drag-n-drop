import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  images: string[] = [
    'assets/images/beau_100.jpg',
    'assets/images/fader_100.jpg',
    'assets/images/glenda_100.jpg',
    'assets/images/mofat_100.jpg',
  ];
  dropPosition: { x: string; y: string };
  isHighlighted = false;

  onDragStart(event: DragEvent, image: string): void {
    event.dataTransfer.setData('image', image);
  }

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    const image = event.dataTransfer.getData('image');
    const index = this.images.indexOf(image);

    if (index !== -1) {
      this.images.splice(index, 1);
    }

    this.isHighlighted = false;
    this.showAnimation(event);
  }

  private showAnimation(event: DragEvent): void {
    this.dropPosition = {
      x: event.clientX + 'px',
      y: event.clientY + 'px',
    };

    setTimeout(() => {
      this.dropPosition = null;
    }, 500);
  }
}
