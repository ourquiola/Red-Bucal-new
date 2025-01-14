import withMiddleware from '../../middlewares/withMiddleware'
import xlsx from 'xlsx'
import fs from 'fs'
import archiver from 'archiver'

const handler = async (req, res) => {

    if (req.method == 'POST') {

        const {afiliacion} = req.body

        const projection = {
            _id: false,
            state: true,
            name: true,
            typeDoc: true,
            identification: true,
            email: true,
            birthdate: true,
            adress: true,
            phone: true,
            know: true,
            plan: true,
            start: true,
            end: true,
            service: true,
            date: true,
            afiliacion: true,
        }    
    
        try {

            let userList

            if (afiliacion === '') {
                userList = await req.db.collection('users')
                .find(
                    {},
                    {projection}
                ).toArray()
            } else {
                userList = await req.db.collection('users')
                .find(
                    {afiliacion},
                    {projection}
                ).toArray()
            }
    
            const obj = userList.map(e => e)
    
            const newWB = xlsx.utils.book_new()
            const newWS = xlsx.utils.json_to_sheet(obj)
            
            let fileName

            if (afiliacion === '') {
                fileName = 'RED BUCAL'
            } else {
                fileName = afiliacion
            }

            afiliacion.replace(/ /, '-')
    
            xlsx.utils.book_append_sheet(newWB, newWS, "name")
    
            xlsx.writeFile(newWB, `${fileName}.xlsx`)
    
            // if (fs.f)
    
            if (fs.existsSync(`${fileName}.xlsx`)) {
                fs.renameSync(`${fileName}.xlsx`, `public/excels/${fileName}.xlsx`, err => {
                    if (err) throw err;
                    console.log('funciona')
                })
            }
    
            /* fs.readdir('public', (err, arch) => {
                console.log(arch)
            }) */
    
            let output = fs.createWriteStream(`public/excels/${fileName}.zip`)
            let archive = archiver('zip', { gzip: true, zlib: { leverl: 9 } })
            archive.on('error', err => {throw err})
            archive.pipe(output)
            archive.file(`public/excels/${fileName}.xlsx`, {name: `${fileName}.xlsx`})
            await archive.finalize()
            fs.unlinkSync(`public/excels/${fileName}.xlsx`)
            res.json({status: 'ok'})

        } catch (error) {
            console.log(error)
            res.json({status: 'error'})
        }

    } else {
        res.status(405).json({status: 'error'})
    }

}

export default withMiddleware(handler)