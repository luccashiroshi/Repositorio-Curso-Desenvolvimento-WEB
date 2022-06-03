import Layout from "../../components/Layout"
import { useRouter } from 'next/router'

export default function ClientePorCodigo() {
    const router = useRouter()
    return (
        <Layout titulo="Naveção Dinâmica">
            <span>Código = {router.query.codigo}</span>
        </Layout>
    )
}