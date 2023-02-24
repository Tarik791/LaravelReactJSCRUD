import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SkillContext from '../../Context/SkillContext';

export const SkillIndex = () => {
  const { skills, getSkills, deleteSkill } = useContext(SkillContext);
useEffect(() => {

    getSkills();

}, []);
  return (
    <div>
      <h2>Skills</h2>
      <Link to={'/skills/create'}>New Skill</Link>
      <table>
        <thead>
          <tr>
          <th>ID</th>

            <th>Name</th>
            <th>Slug</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => {
               return (
                <tr key={skill.id}>
                  <td >{skill.id}</td>
                <td >{skill.name}</td>
                <td>{skill.slug}</td>
                <td>
                  <Link to={`/skills/${skill.id}/edit`}>Edit</Link>
                  <button onClick={() => deleteSkill(skill.id)} >Delete</button>
                </td>

                </tr>
               );
          })}
           
     
        </tbody>
      </table>
    </div>  
  );
};
