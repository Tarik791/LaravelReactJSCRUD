import {useContext, useEffect} from 'react'
import SkillContext from '../../Context/SkillContext';
import { useParams } from 'react-router-dom';

export const SkillEdit = () => {
  const {formValues, onChange,  errors, skill, getSkill, updateSkill} = useContext(SkillContext);
  
  let { id } = useParams();

  useEffect(() => {
    getSkill(id);
  }, []);

  return (
    <div>
    <form onSubmit={updateSkill}>
      {errors.name && <span>{errors.name[0]}</span>}
      <label htmlFor="name">Name</label>
      <input name="name" value={formValues["name"]} onChange={onChange} type="text" />   
      {errors.slug && <span>{errors.slug[0]}</span>}
      <label htmlFor="slug">Slug</label>
      <input name='slug' value={formValues['slug']} onChange={onChange} type="text" />

      <button>Update</button>       
    </form>
  </div>
  )
}
