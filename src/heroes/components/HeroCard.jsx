import PropTypes from 'prop-types'
import { Link } from 'react-router';

function HeroCard({hero}) {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              className="card-img"
              src={`/assets/heroes/${hero.id}.jpg`}
              alt={hero.superhero}
            />
          </div>
          <div className="col-8">
            <h5 className="card-body">{hero.superhero}</h5>
            <p className="card-text">{hero.alter_ego}</p>
            <p className="card-text">
              <small className="text-muted">{hero.first_appearance}</small>
            </p>

            <Link to={`/hero/${hero.id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
    hero:PropTypes.object.isRequired
}

export default HeroCard
