import React from 'react';
import { useParams } from 'react-router-dom';
import './PlantDetail.scss';

function PlantDetail() {
  const { id } = useParams();

  return (
    <div className="plant-detail">
      <h1>Détails de la plante {id}</h1>
      {/* Ajouter la logique pour afficher les détails de la plante */}
    </div>
  );
}

export default PlantDetail;
