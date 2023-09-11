const form = document.querySelector('form');
const followersh5 = document.querySelector('.card-body h5:nth-of-type(1)');
const followingh5 = document.querySelector('.card-body h5:nth-of-type(2)');
const displayImage = document.querySelector('.card img')

const BASE_URL = 'https://api.github.com/users';

async function fetchProfile(username){
    const url = `${BASE_URL}/${username}`;
    try{
        const res = await fetch(url);
        if(res.status !== 200)
        {
            throw new Error(`Req failed ${req.status}`);
        }
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log("Error",err);
    }
}

function renderProfileCard(profiledata)
{
    followersh5.innerHTML = `Followers: ${profiledata.followers}`;
    followingh5.innerHTML = `Following: ${profiledata.following}`;
    displayImage.setAttribute('src',profiledata.avatar_url);
}

form.addEventListener('submit', async function(event){
    event.preventDefault();
    const username = event.target.elements[0].value;
    if(username.trim().length > 0)
    {
        const profiledata = await fetchProfile(username.trim());
        renderProfileCard(profiledata)
    }

})