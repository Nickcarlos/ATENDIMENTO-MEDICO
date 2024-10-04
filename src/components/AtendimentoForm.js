import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './AtendimentoForm.css';

const AtendimentoForm = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    endereco: '',
    contato: '',
    cpfRg: '',
    nomeRepresentado: '',
    dataNascimentoRepresentado: '',
    cpfRgRepresentado: '',
    diagnostico: '',
    tratamentos: '',
    laudosPrescricoes: 'sim',
    tempoAguardando: '',
    demandasSaude: '',
    tentativasServicos: '',
    alternativasTratamento: '',
    impactoQualidadeVida: '',
    consequenciasLongoPrazo: '',
    solicitacoesSistemaSaude: '',
    registrosSolicitacoes: 'sim',
    condicoesFinanceiras: 'sim',
    gastosTratamentos: '',
    documentacao: 'sim',
    copiasDocumentos: 'sim',
    experienciaTratamento: '',
    melhoraPiora: '',
    acompanhamentoMedico: '',
    frequenciaConsultas: '',
    suporteFamiliar: 'sim',
    impactoRelacoes: '',
    internacoes: '',
    experienciasInternacoes: '',
    medicamentosEquipamentos: '',
    dificuldadesMedicamentos: 'sim',
    barreirasAcesso: '',
    discriminacao: 'sim',
    expectativas: '',
    objetivosSaude: '',
    acoesJudiciais: '',
    resultadosAcoes: '',
    direitosLegais: 'sim',
    informacoesAdicionais: '',
  });

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para gerar o PDF
  const handlePDFGeneration = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text("Formulário de Atendimento Médico", 10, 10);

    // Adicione as perguntas e respostas aqui
    doc.setFontSize(12);
    doc.text(`1. Nome Completo: ${formData.nomeCompleto}`, 10, 20);
    doc.text(`2. Data de Nascimento: ${formData.dataNascimento}`, 10, 30);
    doc.text(`3. Endereço Residencial: ${formData.endereco}`, 10, 40);
    doc.text(`4. Número de Contato: ${formData.contato}`, 10, 50);
    doc.text(`5. CPF e RG: ${formData.cpfRg}`, 10, 60);
    doc.text(`6. Nome do Representado: ${formData.nomeRepresentado}`, 10, 70);
    doc.text(`7. Data de Nascimento do Representado: ${formData.dataNascimentoRepresentado}`, 10, 80);
    doc.text(`8. CPF e RG do Representado: ${formData.cpfRgRepresentado}`, 10, 90);
    
    doc.text("9. Histórico Médico", 10, 100);
    doc.text(`Diagnóstico: ${formData.diagnostico}`, 10, 110);
    doc.text(`Tratamentos Recomendados: ${formData.tratamentos}`, 10, 120);
    doc.text(`Possui Laudos e Prescrições: ${formData.laudosPrescricoes}`, 10, 130);
    doc.text(`Tempo Aguardando: ${formData.tempoAguardando}`, 10, 140);

    doc.text("10. Demandas de Saúde", 10, 150);
    doc.text(`Serviços Necessários: ${formData.demandasSaude}`, 10, 160);
    doc.text(`Tentativas de Obtenção: ${formData.tentativasServicos}`, 10, 170);
    doc.text(`Alternativas de Tratamento: ${formData.alternativasTratamento}`, 10, 180);

    doc.text("11. Impacto na Qualidade de Vida", 10, 190);
    doc.text(`Impacto na Vida Diária: ${formData.impactoQualidadeVida}`, 10, 200);
    doc.text(`Consequências a Longo Prazo: ${formData.consequenciasLongoPrazo}`, 10, 210);

    doc.text("12. Interações com o Sistema de Saúde", 10, 220);
    doc.text(`Solicitações ao Estado ou Município: ${formData.solicitacoesSistemaSaude}`, 10, 230);
    doc.text(`Registros das Solicitações: ${formData.registrosSolicitacoes}`, 10, 240);

    doc.text("13. Aspectos Financeiros", 10, 250);
    doc.text(`Condições Financeiras: ${formData.condicoesFinanceiras}`, 10, 260);
    doc.text(`Gastos com Tratamentos: ${formData.gastosTratamentos}`, 10, 270);

    doc.text("14. Documentação", 10, 280);
    doc.text(`Documentação Médica: ${formData.documentacao}`, 10, 290);
    doc.text(`Cópias ou Fotos: ${formData.copiasDocumentos}`, 10, 300);

    doc.text("15. Experiência com o Tratamento", 10, 310);
    doc.text(`Experiência: ${formData.experienciaTratamento}`, 10, 320);
    doc.text(`Melhora ou Piora: ${formData.melhoraPiora}`, 10, 330);

    doc.text("16. Acompanhamento Médico", 10, 340);
    doc.text(`Acompanhamento Atual: ${formData.acompanhamentoMedico}`, 10, 350);
    doc.text(`Frequência de Consultas: ${formData.frequenciaConsultas}`, 10, 360);

    doc.text("17. Suporte Familiar e Social", 10, 370);
    doc.text(`Suporte Familiar: ${formData.suporteFamiliar}`, 10, 380);
    doc.text(`Impacto nas Relações Pessoais: ${formData.impactoRelacoes}`, 10, 390);

    doc.text("18. Histórico de Internações", 10, 400);
    doc.text(`Internações: ${formData.internacoes}`, 10, 410);
    doc.text(`Experiências durante Internações: ${formData.experienciasInternacoes}`, 10, 420);

    doc.text("19. Medicação e Equipamentos", 10, 430);
    doc.text(`Medicamentos Necessários: ${formData.medicamentosEquipamentos}`, 10, 440);
    doc.text(`Dificuldades com Medicamentos: ${formData.dificuldadesMedicamentos}`, 10, 450);

    doc.text("20. Barreiras Enfrentadas", 10, 460);
    doc.text(`Barreiras de Acesso: ${formData.barreirasAcesso}`, 10, 470);
    doc.text(`Discriminação: ${formData.discriminacao}`, 10, 480);

    doc.text("21. Expectativas e Objetivos", 10, 490);
    doc.text(`Expectativas: ${formData.expectativas}`, 10, 500);
    doc.text(`Objetivos de Saúde: ${formData.objetivosSaude}`, 10, 510);

    doc.text("22. Informações Legais Anteriores", 10, 520);
    doc.text(`Ações Judiciais Anteriores: ${formData.acoesJudiciais}`, 10, 530);
    doc.text(`Resultados de Ações: ${formData.resultadosAcoes}`, 10, 540);
    doc.text(`Direitos Legais: ${formData.direitosLegais}`, 10, 550);

    doc.text("23. Informações Adicionais", 10, 560);
    doc.text(`Informações Relevantes: ${formData.informacoesAdicionais}`, 10, 570);

    // Finalize e salve o PDF
    doc.save('formulario_atendimento_medico.pdf');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulário de Atendimento Médico</h2>
      <form className="atendimento-form">
        {/* Seção 1: Informações Pessoais */}
        <h3>1. Informações Pessoais</h3>
        <div className="form-group">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nomeCompleto"
            className="form-input"
            value={formData.nomeCompleto}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            className="form-input"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Endereço Residencial:</label>
          <input
            type="text"
            name="endereco"
            className="form-input"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Número de Contato:</label>
          <input
            type="tel"
            name="contato"
            className="form-input"
            value={formData.contato}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>CPF e RG:</label>
          <input
            type="text"
            name="cpfRg"
            className="form-input"
            value={formData.cpfRg}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Nome completo do Representado (caso se aplique):</label>
          <input
            type="text"
            name="nomeRepresentado"
            className="form-input"
            value={formData.nomeRepresentado}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Data de Nascimento do Representado:</label>
          <input
            type="date"
            name="dataNascimentoRepresentado"
            className="form-input"
            value={formData.dataNascimentoRepresentado}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>CPF e RG do Representado:</label>
          <input
            type="text"
            name="cpfRgRepresentado"
            className="form-input"
            value={formData.cpfRgRepresentado}
            onChange={handleChange}
          />
        </div>

        {/* Seção 2: Histórico Médico */}
        <h3>2. Histórico Médico</h3>
        <div className="form-group">
          <label>Qual o diagnóstico de saúde atual?</label>
          <textarea
            name="diagnostico"
            className="form-input"
            value={formData.diagnostico}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Quais tratamentos foram recomendados pelo médico?</label>
          <textarea
            name="tratamentos"
            className="form-input"
            value={formData.tratamentos}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Você possui todos os laudos e prescrições médicas necessárias?</label>
          <select
            name="laudosPrescricoes"
            className="form-input"
            value={formData.laudosPrescricoes}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Há quanto tempo você está aguardando o tratamento/serviço de saúde?</label>
          <input
            type="text"
            name="tempoAguardando"
            className="form-input"
            value={formData.tempoAguardando}
            onChange={handleChange}
          />
        </div>

        {/* Seção 3: Demandas de Saúde */}
        <h3>3. Demandas de Saúde</h3>
        <div className="form-group">
          <label>Quais serviços de saúde ou tratamentos você necessita e não está recebendo?</label>
          <textarea
            name="demandasSaude"
            className="form-input"
            value={formData.demandasSaude}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Você já tentou obter esses serviços através do SUS ou de planos de saúde privados? Descreva o que ocorreu.</label>
          <textarea
            name="tentativasServicos"
            className="form-input"
            value={formData.tentativasServicos}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Existem alternativas de tratamento? Se sim, por que elas não são viáveis para você?</label>
          <textarea
            name="alternativasTratamento"
            className="form-input"
            value={formData.alternativasTratamento}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 4: Impacto na Qualidade de Vida */}
        <h3>4. Impacto na Qualidade de Vida</h3>
        <div className="form-group">
          <label>Como a falta desse tratamento/serviço tem afetado sua vida diária?</label>
          <textarea
            name="impactoQualidadeVida"
            className="form-input"
            value={formData.impactoQualidadeVida}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Existem consequências a longo prazo para a sua saúde devido à falta de tratamento?</label>
          <textarea
            name="consequenciasLongoPrazo"
            className="form-input"
            value={formData.consequenciasLongoPrazo}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 5: Interações com o Sistema de Saúde */}
        <h3>5. Interações com o Sistema de Saúde</h3>
        <div className="form-group">
          <label>Você já solicitou esses serviços ao Estado ou município? Qual foi a resposta?</label>
          <textarea
            name="solicitacoesSistemaSaude"
            className="form-input"
            value={formData.solicitacoesSistemaSaude}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Existem registros dessas solicitações, como protocolos ou respostas escritas?</label>
          <select
            name="registrosSolicitacoes"
            className="form-input"
            value={formData.registrosSolicitacoes}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        {/* Seção 6: Aspectos Financeiros */}
        <h3>6. Aspectos Financeiros</h3>
        <div className="form-group">
          <label>Você tem condições financeiras de arcar com o tratamento por conta própria?</label>
          <select
            name="condicoesFinanceiras"
            className="form-input"
            value={formData.condicoesFinanceiras}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Você já teve gastos com tratamentos relacionados à sua condição? Detalhe esses gastos.</label>
          <textarea
            name="gastosTratamentos"
            className="form-input"
            value={formData.gastosTratamentos}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 7: Documentação */}
        <h3>7. Documentação</h3>
        <div className="form-group">
          <label>Você possui toda a documentação médica e administrativa relacionada à sua demanda de saúde?</label>
          <select
            name="documentacao"
            className="form-input"
            value={formData.documentacao}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Você pode fornecer cópias ou fotos desses documentos?</label>
          <select
            name="copiasDocumentos"
            className="form-input"
            value={formData.copiasDocumentos}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        {/* Seção 8: Experiência com o Tratamento */}
        <h3>8. Experiência com o Tratamento</h3>
        <div className="form-group">
          <label>Você já recebeu algum tipo de tratamento para sua condição? Como foi a experiência?</label>
          <textarea
            name="experienciaTratamento"
            className="form-input"
            value={formData.experienciaTratamento}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Houve alguma melhora ou piora em sua condição de saúde após o tratamento?</label>
          <textarea
            name="melhoraPiora"
            className="form-input"
            value={formData.melhoraPiora}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 9: Acompanhamento Médico */}
        <h3>9. Acompanhamento Médico</h3>
        <div className="form-group">
          <label>Você está sendo acompanhado por algum médico ou equipe de saúde atualmente?</label>
          <select
            name="acompanhamentoMedico"
            className="form-input"
            value={formData.acompanhamentoMedico}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Com que frequência você realiza consultas ou exames de acompanhamento?</label>
          <input
            type="text"
            name="frequenciaConsultas"
            className="form-input"
            value={formData.frequenciaConsultas}
            onChange={handleChange}
          />
        </div>

        {/* Seção 10: Suporte Familiar e Social */}
        <h3>10. Suporte Familiar e Social</h3>
        <div className="form-group">
          <label>Você possui suporte familiar ou de amigos para ajudar no seu tratamento e cuidados diários?</label>
          <select
            name="suporteFamiliar"
            className="form-input"
            value={formData.suporteFamiliar}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Como sua condição de saúde afetou suas relações pessoais e sociais?</label>
          <textarea
            name="impactoRelacoes"
            className="form-input"
            value={formData.impactoRelacoes}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 11: Histórico de Internações */}
        <h3>11. Histórico de Internações</h3>
        <div className="form-group">
          <label>Você já precisou ser internado devido à sua condição de saúde? Quantas vezes e por quanto tempo?</label>
          <textarea
            name="internacoes"
            className="form-input"
            value={formData.internacoes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Como foram suas experiências durante as internações?</label>
          <textarea
            name="experienciasInternacoes"
            className="form-input"
            value={formData.experienciasInternacoes}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 12: Medicação e Equipamentos */}
        <h3>12. Medicação e Equipamentos</h3>
        <div className="form-group">
          <label>Quais medicamentos e/ou equipamentos são necessários para o seu tratamento?</label>
          <textarea
            name="medicamentosEquipamentos"
            className="form-input"
            value={formData.medicamentosEquipamentos}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Você tem dificuldade em obter esses medicamentos ou equipamentos?</label>
          <select
            name="dificuldadesMedicamentos"
            className="form-input"
            value={formData.dificuldadesMedicamentos}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        {/* Seção 13: Barreiras Enfrentadas */}
        <h3>13. Barreiras Enfrentadas</h3>
        <div className="form-group">
          <label>Quais são as principais barreiras que você enfrenta para acessar o tratamento necessário?</label>
          <textarea
            name="barreirasAcesso"
            className="form-input"
            value={formData.barreirasAcesso}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Você já enfrentou discriminação ou negligência por parte de profissionais de saúde ou instituições?</label>
          <select
            name="discriminacao"
            className="form-input"
            value={formData.discriminacao}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        {/* Seção 14: Expectativas e Objetivos */}
        <h3>14. Expectativas e Objetivos</h3>
        <div className="form-group">
          <label>Quais são suas expectativas em relação ao tratamento e ao resultado da ação judicial?</label>
          <textarea
            name="expectativas"
            className="form-input"
            value={formData.expectativas}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Existem objetivos específicos de saúde que você espera alcançar com o tratamento?</label>
          <textarea
            name="objetivosSaude"
            className="form-input"
            value={formData.objetivosSaude}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Seção 15: Informações Legais Anteriores */}
        <h3>15. Informações Legais Anteriores</h3>
        <div className="form-group">
          <label>Você já ajuizou alguma ação judicial relacionada à sua saúde antes? Qual foi o resultado?</label>
          <textarea
            name="acoesJudiciais"
            className="form-input"
            value={formData.acoesJudiciais}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Você está ciente dos seus direitos legais em relação ao acesso à saúde?</label>
          <select
            name="direitosLegais"
            className="form-input"
            value={formData.direitosLegais}
            onChange={handleChange}
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        {/* Seção 16: Informações Adicionais */}
        <h3>16. Informações Adicionais</h3>
        <div className="form-group">
          <label>Há algo mais que você acredita ser relevante para o seu caso?</label>
          <textarea
            name="informacoesAdicionais"
            className="form-input"
            value={formData.informacoesAdicionais}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Botão para gerar o PDF */}
        <button type="button" className="submit-button" onClick={handlePDFGeneration}>
          Gerar PDF
        </button>
      </form>
    </div>
  );
};

export default AtendimentoForm;
