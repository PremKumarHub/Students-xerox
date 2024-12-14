import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Duplicate Cards', img: 'https://www.swiftpro-printer.com/wp-content/uploads/2020/07/pvc-cards.jpg' },
    { title: 'Spiral Binding', img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/diary-notebook/v/m/y/a4-notebook-smooth-paper-a4-soft-cover-spiral-notebook-4-pack-original-imagmey3hpjnhyf7.jpeg?q=90&crop=false' },
    { title: 'Document Printing', img: 'https://uniquecopier.in/images/products/doc1.jpg' },
    { title: 'Book Printing', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZtNzWOnO3lpF9P6z6-yJ6vZHIo4y_3GInw&s' },
    { title: 'Applications Apply', img: 'https://media.istockphoto.com/id/1149466575/photo/apply-now-button-on-computer-keyboard.jpg?s=612x612&w=0&k=20&c=-9JcOl1HAZQtMr0Akk5H7K3ZYpB1m4M1OAX4x-HlhdA=' },
    { title: 'Bill Payments', img: 'https://cdn-resources.highradius.com/resources/wp-content/uploads/2024/05/Image-1-1.jpg' },
  ];

  return (
    <div id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;