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
    const response = await fetch(serviceUrls.registration, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        return response;
    }

    return null;
}

export { signOut, signIn, getUser, registrate };
