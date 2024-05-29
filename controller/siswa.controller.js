import { query } from "../database/db.js"

export const getSiswa = async(req,res)=>{
    try{
        const result = await query('Select * from siswa')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertSiswa = async(req,res)=>{
    const {nama}= req.body
    try {
        await query("INSERT INTO siswa(nama) values (?)", [nama])
        return res.status(200).json({msg:"Siswa Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateSiswa = async(req,res)=>{
    const {nama}= req.body
    const {id}=req.params
    try {
        await query("UPDATE siswa SET nama=? where id=?", [nama, id])
        return res.status(200).json({msg:"Siswa Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteSiswa = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM siswa where id=?", [id])
        return res.status(200).json({msg:"Siswa Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getSiswaById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from siswa where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getSiswaTest = async(req,res)=>{
    const {id, nama} = req.query
    console.log(id, nama)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from siswa where id=?', [id,nama])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
