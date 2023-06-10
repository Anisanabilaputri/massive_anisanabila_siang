import '../css/style.css';
import profile from '../Assets/profile.png'
const Cardprofile = ()=> {
    return (
        // 1. Inline Css
        <div style={{
            backgroundColor : '#20043f' ,
            width : '100vw',
            height :'100vh',
            display : 'flex',
            justifyContent : 'center',
            alignItems :'center',
            }}>
            
            <div className='card'>
                <img src={profile} />
                <div className='profile'>Mahasiswa Akuntansi</div>
                <div className='name'>Anisa Nabila Putri</div>
                <div className='desc'>Saya Anisa Nabila Putri Mahasiswa Akuntansi di Universitas Maritim Raja Ali Haji Angkatan 2020. Selain aktif mengikuti perkuliahan di kampus, saya juga mengikuti organisasi diluar kampus untuk menambah ilmu yang saya miliki.</div>
                <button className='button'>Contact Me</button>
            </div>
        </div>
    )
}

export default Cardprofile;