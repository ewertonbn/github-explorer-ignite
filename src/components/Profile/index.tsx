import { Sidebar } from "./styles";

import { FiGlobe, FiLinkedin, FiHome, FiStar } from 'react-icons/fi';

interface User {
  login: string;
  name: string;
  bio: string;
  blog: string;
  company: string;
  followers: number;
  following: number;
  location: string;
  url: string;
  avatar_url: string;
  html_url: string;
}

interface ProfileProps {
  profile: User;
}

export function Profile(props: ProfileProps) {
  return(
    <Sidebar>
      <h2>Perfil</h2>
      <img src={props.profile.avatar_url} alt={props.profile.name}/>
      <h3>{props.profile.name}</h3>
      <p>{props.profile.bio}</p>
      <div>
        <FiStar size={15} color="#c9d1d9" />
        <span>{props.profile.followers} followers</span>
        <span>{props.profile.following} following</span>
      </div>
      <p>
        <FiGlobe size={15} color="#c9d1d9" />
        {props.profile.location}
      </p>
      <p>
        <FiLinkedin size={15} color="#c9d1d9" />
        {props.profile.blog}
      </p>
      <p>
        <FiHome size={15} color="#c9d1d9" />
        {props.profile.company}
      </p>
      <a href={props.profile.url}>Acessar perfil completo</a>
    </Sidebar>
  );
}