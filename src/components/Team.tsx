import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Lic. Luis Paulo Ruiz Pereira',
    role: 'Socio Gerente',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFGNqWfpB4ILg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692010967090?e=2147483647&v=beta&t=NgRq1reevbdmbFE5dnS0KloEb3Q2WQzxbI-akGS5h6M',
    bio: 'Especialista en implementación de sistemas ERP y optimización de procesos empresariales.',
  },
  {
    name: 'Roberto Andres Ruiz Pereira',
    role: 'Socio Gerente',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1639681377888?e=2147483647&v=beta&t=hc2Ku6ZOHv9Bw_3gBfgJ8-X-XJtDiPMZ695az9Dv_Fg',
    bio: 'Experto en soluciones CRM y estrategias de transformación digital.',
  }
];

export default function Team() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestro Equipo</h2>
          <p className="mt-4 text-xl text-gray-600">
            Líderes expertos en transformación digital y consultoría empresarial
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-48 h-48 rounded-full object-cover"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-6 text-xl font-medium text-gray-900">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <p className="mt-2 text-gray-500 text-center max-w-xs">{member.bio}</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}