import PropTypes from "prop-types";

const Skill = (props) => {
  return (
    <div className="skill">
      <img src={`/skills/${props.skill}`} alt={props.skill} className="skill-img"  
      title={props.skill.replace(/\.svg$/, '')} />
      <p>{props.skill.replace(/\.svg$/, '').toUpperCase()}</p>
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;