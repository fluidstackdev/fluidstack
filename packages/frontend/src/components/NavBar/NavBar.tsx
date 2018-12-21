import React, { Component, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

export interface NavItem {
  label: string
  link: string
}

interface Props {
  items: NavItem[]
}

export const NavBar: React.SFC<Props> = props => (
  <nav>
    <ul>
      {props.items.map(item => (
        <li key={item.link}>
          <Link to={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)
