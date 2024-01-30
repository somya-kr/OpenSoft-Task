export default function Page({ params }: { params: { username: string } }) {
    return (
        <h1>Here will be the profile of {params.username}'s profile</h1>
    )
  }