import { DocumentoPdf } from "@/modules/proposta";
import { proposta } from "@/modules/proposta/data/proposta.config";
import logoEscuro from "@/assets/logo-growthhub.png";

const Documento = () =>
  proposta.documento ? <DocumentoPdf data={proposta.documento} logoSrc={logoEscuro} /> : null;

export default Documento;
