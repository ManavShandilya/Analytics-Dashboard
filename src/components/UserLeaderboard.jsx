import { Row, Col } from 'react-bootstrap';

export const UserLeaderboard = () => {

    // User Leaderboard data
    const leaderboardData = [
        { email: 'paula.suarze@con...es', friendsInvited: 6500, country: 'USA' },
        { email: 'laura.kenet..3@yahoo.com', friendsInvited: 2300, country: 'Monaco' },
        { email: 'aaron.michel@arg.org', friendsInvited: 1200, country: 'Prague' },
        { email: 'example@example.com', friendsInvited: 900, country: 'China' },
    ];

    const firstFourEntries = leaderboardData.slice(0, 4); // Display only the first 4 data entries from Leaderboard data

    return (
        <div className="custom-card">
            <h4><b>User Leaderboard</b></h4>
            <br></br>
            <Row>
                <Col>
                    <p className='leaderboard'>Email</p>
                    {firstFourEntries.map((user, index) => (
                        <p className='data leaderboard' key={index}>{user.email}</p>
                    ))}
                </Col>
                <Col>
                    <p className='leaderboard' style={{ whiteSpace: 'nowrap' }}>Friends invited</p>
                    {firstFourEntries.map((user, index) => (
                        <p className='data leaderboard' key={index}>{user.friendsInvited.toLocaleString()}</p>
                    ))}
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <p className='leaderboard'>Country</p>
                    {firstFourEntries.map((user, index) => (
                        <p className='data leaderboard' key={index}>{user.country}</p>
                    ))}
                </Col>
            </Row>

            <button className='custom-button'>
                See leaderboard
            </button>
        </div>
    )

};