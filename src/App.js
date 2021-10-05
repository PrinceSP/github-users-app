import {useState} from 'react'
import {Header,SearchBar,UserInformation} from './components'
import './index.css'
import Axios from 'axios';


function App() {
  const [value,setValue] = useState();
  const [img,setImg] = useState()
  const [name,setName] = useState()
  const [username,setUsername] = useState()
  const [bio,setBio] = useState()
  const [repo,setRepo] = useState()
  const [followings,setFollow] = useState()
  const [followers,setFwers] = useState()
  const [loc,setLoc] = useState()
  const [twit,setTwit] = useState()
  const [company,setComp] = useState()
  const [blog,setBlog] = useState()
  const [join,setDate] = useState()
  let [color,setColor] = useState()

  const months=[
    'Jan','Feb','Mar','Apr',
    'May','Jun','Jul','Aug',
    'Sep','Oct','Nov','Dec'
  ]

  const handlebtnSubmit= event =>{
    event.preventDefault()
    Axios.get(`https://api.github.com/users/${value}`).then(res=>{
      const dates=res.data.created_at.split('T').shift().split('-')
      setImg(res.data.avatar_url)
      setName(res.data.name)
      setUsername(res.data.login)
      setBio(res.data.bio)
      setRepo(res.data.public_repos)
      setFollow(res.data.followers)
      setFwers(res.data.following)
      setLoc(res.data.location)
      setTwit(res.data.twitter_username)
      setComp(res.data.company)
      setBlog(res.data.blog)
      setDate(`${dates[2]} ${months[dates[1]-1]} ${dates[0]}`)
      setValue('');
    })

  }

  const handleColorTheme =()=>setColor(!color)

  const handleChange= event =>setValue(event.target.value)

  return (
    <div className={color?"main-app light":"main-app dark"}>
      <Header onColor={handleColorTheme} text={color}/>
      <SearchBar value={value}
        handleClick={handlebtnSubmit}
        onChange={handleChange}
        onSubmit={handlebtnSubmit}/>
      <UserInformation pic={img}
        names={name}
        uName={username}
        bios={bio}
        dateJoin={join}
        repos={repo}
        following={followings}
        followers={followers}
        loc={loc}
        twit={twit}
        company={company}
        blog={blog}/>
    </div>
  );
}

export default App;
