import {ChangeDetectionStrategy, Component } from '@angular/core';
//import * as productsData from '../../assets/db/products.json';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppCatalogComponent {
  
  products: any;

  constructor() {
    this.products = [
      {
        id: 1,
        nombre: "Ratón Gaming Trust LED Wireless Negro",
        descripcion: "Ratón gaming inalámbrico con luces LED, color negro.",
        categorºias: ["Accesorios", "Gaming"],
        etiquetas: ["Ratón", "Gaming", "Inalámbrico"],
        precio: 29.99,
        precioRebajado: 24.99,
        urlImagen: "https://example.com/raton.jpg"
      },
      {
        id: 2,
        nombre: "Teclado Mecánico RGB Logitech G Pro X",
        descripcion: "Teclado mecánico con iluminación RGB personalizable.",
        categorias: ["Accesorios", "Gaming"],
        etiquetas: ["Teclado", "Mecánico", "RGB"],
        precio: 129.99,
        urlImagen: "https://example.com/teclado.jpg"
      },
      {
        id: 3,
        nombre: "Monitor Gaming MSI Optix G271",
        descripcion: "Monitor gaming de 27 pulgadas con resolución Full HD.",
        categorias: ["Monitores", "Gaming"],
        etiquetas: ["Monitor", "Gaming", "Full HD"],
        precio: 249.99,
        urlImagen: "https://example.com/monitor.jpg"
      },
      {
        id: 4,
        nombre: "Auriculares Inalámbricos Sony WH-1000XM4",
        descripcion: "Auriculares inalámbricos con cancelación de ruido y sonido de alta resolución.",
        categorias: ["Audio", "Accesorios"],
        etiquetas: ["Auriculares", "Inalámbricos", "Sony"],
        precio: 349.99,
        urlImagen: "https://example.com/auriculares.jpg"
      },
      {
        id: 5,
        nombre: "SSD Samsung 970 EVO Plus 1TB",
        descripcion: "Disco de estado sólido de alta velocidad con capacidad de 1TB.",
        categorias: ["Almacenamiento", "Componentes"],
        etiquetas: ["SSD", "Samsung", "1TB"],
        precio: 179.99,
        urlImagen: "https://example.com/ssd.jpg"
      },
      {
        id: 6,
        nombre: "Cámara Mirrorless Sony Alpha a7 III",
        descripcion: "Cámara mirrorless con sensor full-frame y grabación de video 4K.",
        categorias: ["Cámaras", "Fotografía"],
        etiquetas: ["Cámara", "Mirrorless", "Sony"],
        precio: 1999.99,
        urlImagen: "https://example.com/camara.jpg"
      },
      {
        id: 7,
        nombre: "Impresora Multifunción HP LaserJet Pro MFP M283fdw",
        descripcion: "Impresora láser multifunción con capacidad de impresión a doble cara.",
        categorias: ["Impresoras", "Oficina"],
        etiquetas: ["Impresora", "LaserJet", "HP"],
        precio: 349.99,
        urlImagen: "https://example.com/impresora.jpg"
      },
      {
        id: 8,
        nombre: "Silla Gaming Corsair T3 Rush",
        descripcion: "Silla gaming ergonómica con espuma viscoelástica y reposabrazos ajustables.",
        categorias: ["Muebles", "Gaming"],
        etiquetas: ["Silla", "Gaming", "Corsair"],
        precio: 299.99,
        urlImagen: "https://example.com/silla.jpg"
      },
      {
        id: 9,
        nombre: "Smartphone iPhone 13 Pro",
        descripcion: "Smartphone con pantalla Super Retina XDR y sistema de triple cámara.",
        categorias: ["Smartphones", "Electrónica"],
        etiquetas: ["iPhone", "Apple", "Smartphone"],
        precio: 999.99,
        urlImagen: "https://example.com/iphone.jpg"
      },
      {
        id: 10,
        nombre: "Router Inalámbrico ASUS RT-AX86U",
        descripcion: "Router Wi-Fi 6 de doble banda con tecnología AiMesh para cobertura de red completa.",
        categorias: ["Redes", "Accesorios"],
        etiquetas: ["Router", "ASUS", "Wi-Fi 6"],
        precio: 249.99,
        urlImagen: "https://example.com/router.jpg"
      },
      {
        id: 11,
        nombre: "Micrófono Blue Yeti USB",
        descripcion: "Micrófono USB de alta calidad para streaming y grabación de audio.",
        categorias: ["Audio", "Accesorios"],
        etiquetas: ["Micrófono", "USB", "Blue"],
        precio: 129.99,
        urlImagen: "https://example.com/microfono.jpg"
      },
      {
        id: 12,
        nombre: "Tableta Gráfica Wacom Intuos S",
        descripcion: "Tableta gráfica con lápiz sensible a la presión para dibujo digital y edición de fotos.",
        categorias: ["Tabletas", "Dibujo"],
        etiquetas: ["Tableta", "Gráfica", "Wacom"],
        precio: 79.99,
        urlImagen: "https://example.com/tableta.jpg"
      },
      {
        id: 13,
        nombre: "Altavoces Logitech Z623",
        descripcion: "Sistema de altavoces 2.1 con certificación THX para audio de alta calidad.",
        categorias: ["Audio", "Accesorios"],
        etiquetas: ["Altavoces", "Logitech", "THX"],
        precio: 119.99,
        urlImagen: "https://example.com/altavoces.jpg"
      },
      {
        id: 14,
        nombre: "Disco Duro Externo Seagate Backup Plus 4TB",
        descripcion: "Disco duro externo de 4TB con conectividad USB 3.0 para copias de seguridad rápidas.",
        categorias: ["Almacenamiento", "Accesorios"],
        etiquetas: ["Disco Duro", "Externo", "Seagate"],
        precio: 99.99,
        urlImagen: "https://example.com/disco-duro.jpg"
      },
      {
        id: 15,
        nombre: "Sistema de Sonido Sonos Beam",
        descripcion: "Barra de sonido compacta con soporte para transmisión de música y control por voz.",
        categorias: ["Audio", "Accesorios"],
        etiquetas: ["Barra de Sonido", "Sonos", "Compacta"],
        precio: 399.99,
        urlImagen: "https://example.com/barra-de-sonido.jpg"
      },
      {
        id: 16,
        nombre: "Smartwatch Garmin Forerunner 245",
        descripcion: "Smartwatch con GPS y monitorización avanzada de actividad física.",
        categorias: ["Wearables", "Electrónica"],
        etiquetas: ["Smartwatch", "Garmin", "GPS"],
        precio: 299.99,
        urlImagen: "https://example.com/smartwatch.jpg"
      },
      {
        id: 17,
        nombre: "Kit de Iluminación LED Philips Hue",
        descripcion: "Kit de iluminación inteligente con bombillas LED y puente de conexión.",
        categorias: ["Iluminación", "Accesorios"],
        etiquetas: ["Iluminación", "LED", "Philips Hue"],
        precio: 149.99,
        urlImagen: "https://example.com/iluminacion.jpg"
      },
      {
        id: 18,
        nombre: "Robot Aspirador iRobot Roomba 981",
        descripcion: "Robot aspirador con mapeo inteligente y capacidad de limpieza en varias habitaciones.",
        categorias: ["Electrodomésticos", "Hogar"],
        etiquetas: ["Robot Aspirador", "iRobot", "Roomba"],
        precio: 499.99,
        urlImagen: "https://example.com/roomba.jpg"
      },
      {
        id: 19,
        nombre: "Cafetera Nespresso VertuoPlus",
        descripcion: "Cafetera automática con sistema de cápsulas para preparar café espresso y largo.",
        categorias: ["Electrodomésticos", "Cocina"],
        etiquetas: ["Cafetera", "Nespresso", "Automática"],
        precio: 179.99,
        urlImagen: "https://example.com/cafetera.jpg"
      },
      {
        id: 20,
        nombre: "Batería Externa Anker PowerCore 20100mAh",
        descripcion: "Batería externa de alta capacidad con tecnología de carga rápida PowerIQ.",
        categorias: ["Accesorios", "Electrónica"],
        etiquetas: ["Batería Externa", "Anker", "20100mAh"],
        precio: 49.99,
        urlImagen: "https://example.com/bateria-externa.jpg"
      }
    ];  //productsData.products;
  }
}