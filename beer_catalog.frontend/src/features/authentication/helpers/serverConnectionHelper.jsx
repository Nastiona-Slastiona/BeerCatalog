import serviceUrls from 'authentication/constants/serviceUrls';


async function signOut() {
    await fetch(serviceUrls.signOut, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
}

async function signIn(password, email) {
    const response = await fetch(serviceUrls.signIn, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            password,
            email
        })
    });

    if (response.ok) {
        return response.json();
    }

    return null;
}

async function getUser() {
    const response = await fetch(serviceUrls.getUser, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });

    if (response.ok) {
        return response.json();
    }

    return null;
}

async function registrate(user) {
    const formData = new FormData();
    formData.append('Image', user.image);
    formData.append('Name', user.name);
    formData.append('Email', user.email);
    formData.append('Password', user.password);
    formData.append('BirthDate', user.birthDate);

    const response = await fetch(serviceUrls.registration, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        console.log(response.name);

        return response;
    }

    return null;
}

export { signOut, signIn, getUser, registrate };
