import React from 'react'
import styles from './Search.module.css'
import {ReactComponent as SearchIcon} from '../../assets/searchIcon.svg'

function Search() {
  return (
   <form className={styles.wrapper}>
    <input className={styles.search}/>
    <button className={styles.searchBtn}>
      <SearchIcon/>
    </button>
   </form>
  )
}

export default Search