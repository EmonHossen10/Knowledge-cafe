import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center m-5 p-5 border-b-2'>
            <h2 className="text-4xl font-bold t ">Knowledge Cafe </h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;