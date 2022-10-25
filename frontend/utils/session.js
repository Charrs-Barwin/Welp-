
export const postUser = user => {
    return $.ajax({
        url:'/api/users',
        method:'POST',
        data: { user }
    })
}

export const fetchUser = (userId) => $.ajax({
  url: '/api/users/'+userId
});

export const postSession = user => (
    $.ajax({
        url:'/api/session',
        method:'POST',
        data: { user }
    })
)

export const deleteSession = () => (
    $.ajax({
        url:'/api/session',
        method:'DELETE'
    })
)
