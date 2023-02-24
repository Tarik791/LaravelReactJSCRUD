import {useContext, useState} from 'react'
import SkillContext from '../../Context/SkillContext';

export const SkillCreate = () => {

  const {formValues, onChange, storeSkill, errors} = useContext(SkillContext);

  return (
    <div>
      <form onSubmit={storeSkill}>
        {errors.name && <span>{errors.name[0]}</span>}
        <label htmlFor="name">Name</label>
        <input name="name" value={formValues["name"]} onChange={onChange} type="text" />   
        {errors.slug && <span>{errors.slug[0]}</span>}
        <label htmlFor="slug">Slug</label>
        <input name='slug' value={formValues['slug']} onChange={onChange} type="text" />

        <button>Store</button>       
      </form>
    </div>
  )
}
