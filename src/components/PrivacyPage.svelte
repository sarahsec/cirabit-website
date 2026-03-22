<script>
  export let content;
  export let language;
  export let navigate;
  export let homeRoute;
</script>

<section class="panel privacy-panel reveal" style="--delay: 140ms;">
  <p class="badge">{content.privacyBadge}</p>
  <h1>{content.privacyTitle}</h1>
  <p class="policy-updated">{content.privacyUpdated}</p>
  <p class="policy-intro">{content.privacyIntro}</p>

  {#if language === 'en'}
    <article class="policy-block">
      <h2>Our Commitment</h2>
      <p>
        Cirabit is designed with privacy as its foundation. We believe private communication is a
        fundamental right, and this policy explains how Cirabit protects it.
      </p>
    </article>

    <article class="policy-block">
      <h2>Summary</h2>
      <ul>
        <li><strong>No personal data collection:</strong> no names, emails, or phone numbers are required.</li>
        <li><strong>No central servers:</strong> communication happens device-to-device through peer connections.</li>
        <li><strong>No tracking:</strong> there is no analytics, telemetry, or user profiling.</li>
        <li><strong>Open source:</strong> these claims can be audited in the source code.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>What Information Cirabit Stores</h2>
      <h3>On your device only</h3>
      <ul>
        <li><strong>Identity key:</strong> generated on first launch and stored locally in secure storage.</li>
        <li><strong>Nickname:</strong> your display name is stored locally and shared only with peers you chat with.</li>
        <li><strong>Message history:</strong> if retention is enabled by room settings, messages stay encrypted on your device.</li>
        <li><strong>Favorite peers:</strong> saved locally so you can recognize trusted peers in future sessions.</li>
      </ul>
      <h3>Temporary session data</h3>
      <ul>
        <li>Active peer connections (forgotten when the app closes).</li>
        <li>Routing data for message delivery.</li>
        <li>Temporary cache for offline peers (up to 12 hours).</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>What Information Is Shared</h2>
      <h3>With other Cirabit users</h3>
      <ul>
        <li>Your chosen nickname.</li>
        <li>Your ephemeral public key (which can change between sessions).</li>
        <li>Messages sent to public rooms or directly to peers.</li>
        <li>Approximate Bluetooth signal strength for connection quality.</li>
      </ul>
      <h3>With room members</h3>
      <ul>
        <li>Messages are visible to people who have room access.</li>
        <li>Your nickname appears in the room member list.</li>
        <li>Room owners can see when you join.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>What We Do Not Do</h2>
      <ul>
        <li>Collect personal information.</li>
        <li>Track your location.</li>
        <li>Store user data on central servers.</li>
        <li>Share data with third parties.</li>
        <li>Use analytics or telemetry.</li>
        <li>Create user profiles.</li>
        <li>Require account registration.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Encryption</h2>
      <p>Private communication uses end-to-end encryption with modern primitives:</p>
      <ul>
        <li><strong>X25519</strong> for key exchange.</li>
        <li><strong>AES-256-GCM</strong> for message encryption.</li>
        <li><strong>Ed25519</strong> for digital signatures.</li>
        <li><strong>Argon2id</strong> for password-protected rooms.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Your Rights</h2>
      <ul>
        <li><strong>Delete local data:</strong> clear app data at any time from system settings or in-app reset controls.</li>
        <li><strong>Leave anytime:</strong> close the app and your active presence ends.</li>
        <li><strong>No account dependency:</strong> there are no server-side accounts to manage.</li>
        <li><strong>Data portability:</strong> your data stays on your device unless you explicitly export it.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Bluetooth and Permissions</h2>
      <p>Cirabit requires Bluetooth-related permissions to provide peer-to-peer communication.</p>
      <ul>
        <li>Used only for nearby device communication.</li>
        <li>No location history is stored by Cirabit itself.</li>
        <li>Bluetooth is not used for advertising tracking.</li>
        <li>You can revoke permissions at any time in system settings.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Children's Privacy</h2>
      <p>
        Cirabit does not knowingly collect information from children. The app does not require age
        verification because no personal data collection is required.
      </p>
    </article>

    <article class="policy-block">
      <h2>Data Retention</h2>
      <ul>
        <li><strong>Messages:</strong> cleared from memory when the app closes, unless retention is enabled.</li>
        <li><strong>Identity key:</strong> persists until the app or its data is removed.</li>
        <li><strong>Favorites:</strong> persist until you remove them or clear app data.</li>
        <li><strong>Session metadata:</strong> exists only during active sessions.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Security Measures</h2>
      <ul>
        <li>Communication is encrypted.</li>
        <li>No server-side data pipeline is used for chat content.</li>
        <li>Open source code enables public auditing.</li>
        <li>Security updates are shipped as maintenance progresses.</li>
        <li>Cryptographic signatures help prevent tampering.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Changes to This Policy</h2>
      <ul>
        <li>The "Last updated" date will be changed when this policy is revised.</li>
        <li>Updated policy text will be published in the project repository and/or website.</li>
        <li>Because there are no central user profiles, changes are not retroactive on stored server data.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Contact</h2>
      <p>For privacy questions, audits, or suggestions:</p>
      <ul>
        <li>
          Source code:
          <a class="policy-link" href="https://github.com/sarahsec/cirabit-android" target="_blank" rel="noreferrer">
            github.com/sarahsec/cirabit-android
          </a>
        </li>
        <li>
          Open an issue:
          <a class="policy-link" href="https://github.com/sarahsec/cirabit-android/issues" target="_blank" rel="noreferrer">
            Cirabit Issues
          </a>
        </li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Philosophy</h2>
      <p>
        Privacy is not a checkbox feature. For Cirabit, privacy is part of the core architecture:
        no mandatory accounts, no central dependency for conversation flow, and no surveillance model.
      </p>
      <p class="policy-license">
        This text is adapted from the public-domain Bitchat privacy policy and customized for Cirabit.
      </p>
    </article>
  {:else}
    <article class="policy-block">
      <h2>Nosso compromisso</h2>
      <p>
        O Cirabit foi pensado com privacidade como base. Acreditamos que comunicação privada é um
        direito fundamental, e esta política explica como o projeto protege isso.
      </p>
    </article>

    <article class="policy-block">
      <h2>Resumo</h2>
      <ul>
        <li><strong>Sem coleta de dados pessoais:</strong> não exigimos nome, e-mail ou telefone.</li>
        <li><strong>Sem servidores centrais:</strong> a comunicação acontece entre aparelhos, em modo ponto a ponto.</li>
        <li><strong>Sem rastreamento:</strong> não usamos analytics, telemetry ou perfilamento de usuários.</li>
        <li><strong>Código aberto:</strong> essas afirmações podem ser verificadas no código-fonte.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Quais informações o Cirabit armazena</h2>
      <h3>Apenas no seu dispositivo</h3>
      <ul>
        <li><strong>Chave de identidade:</strong> gerada no primeiro uso e armazenada localmente em armazenamento seguro.</li>
        <li><strong>Apelido:</strong> seu nome de exibição fica localmente e só é compartilhado com quem conversa com você.</li>
        <li><strong>Histórico de mensagens:</strong> se retenção estiver ativa na sala, as mensagens ficam criptografadas no seu aparelho.</li>
        <li><strong>Pares favoritos:</strong> salvos localmente para você reconhecer contatos confiáveis em sessões futuras.</li>
      </ul>
      <h3>Dados temporários de sessão</h3>
      <ul>
        <li>Conexões ativas com pares (esquecidas quando o app fecha).</li>
        <li>Dados de roteamento para entrega de mensagens.</li>
        <li>Cache temporário para pares offline (até 12 horas).</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Quais informações são compartilhadas</h2>
      <h3>Com outros usuários do Cirabit</h3>
      <ul>
        <li>Seu apelido escolhido.</li>
        <li>Sua chave pública efêmera (que pode mudar entre sessões).</li>
        <li>Mensagens enviadas para salas públicas ou mensagens diretas.</li>
        <li>Intensidade aproximada do sinal Bluetooth para qualidade de conexão.</li>
      </ul>
      <h3>Com membros de salas</h3>
      <ul>
        <li>Mensagens ficam visíveis para quem tem acesso à sala.</li>
        <li>Seu apelido aparece na lista de membros da sala.</li>
        <li>Quem administra a sala pode ver quando você entrou.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>O que não fazemos</h2>
      <ul>
        <li>Coletar dados pessoais.</li>
        <li>Rastrear sua localização.</li>
        <li>Armazenar dados de usuários em servidor central.</li>
        <li>Compartilhar dados com terceiros.</li>
        <li>Usar analytics ou telemetry.</li>
        <li>Criar perfis de usuário.</li>
        <li>Exigir cadastro obrigatório.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Criptografia</h2>
      <p>A comunicação privada usa criptografia ponta a ponta com primitivas modernas:</p>
      <ul>
        <li><strong>X25519</strong> para troca de chaves.</li>
        <li><strong>AES-256-GCM</strong> para criptografia de mensagens.</li>
        <li><strong>Ed25519</strong> para assinaturas digitais.</li>
        <li><strong>Argon2id</strong> para salas protegidas por senha.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Seus direitos</h2>
      <ul>
        <li><strong>Excluir dados locais:</strong> você pode limpar dados do app quando quiser nas configurações do sistema ou controles de reset do próprio app.</li>
        <li><strong>Sair a qualquer momento:</strong> ao fechar o app, sua presença ativa é encerrada.</li>
        <li><strong>Sem conta obrigatória:</strong> não há conta em servidor para administrar ou excluir.</li>
        <li><strong>Portabilidade:</strong> seus dados ficam no aparelho, salvo quando você exporta explicitamente.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Bluetooth e permissões</h2>
      <p>O Cirabit precisa de permissões relacionadas ao Bluetooth para funcionar em modo ponto a ponto.</p>
      <ul>
        <li>Uso exclusivo para comunicação entre dispositivos próximos.</li>
        <li>O Cirabit não mantém histórico de localização.</li>
        <li>Bluetooth não é usado para rastreamento publicitário.</li>
        <li>Você pode revogar permissões a qualquer momento nas configurações do sistema.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Privacidade de crianças e adolescentes</h2>
      <p>
        O Cirabit não coleta conscientemente dados de crianças. O app não exige verificação de idade
        porque não depende de coleta de dados pessoais.
      </p>
    </article>

    <article class="policy-block">
      <h2>Retenção de dados</h2>
      <ul>
        <li><strong>Mensagens:</strong> saem da memória quando o app fecha, exceto quando retenção está ativada.</li>
        <li><strong>Chave de identidade:</strong> permanece até o app ou seus dados serem removidos.</li>
        <li><strong>Favoritos:</strong> permanecem até você remover ou limpar os dados do app.</li>
        <li><strong>Metadados de sessão:</strong> existem somente durante sessões ativas.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Medidas de segurança</h2>
      <ul>
        <li>Comunicação criptografada.</li>
        <li>Sem pipeline de servidor central para conteúdo do chat.</li>
        <li>Código aberto para auditoria pública.</li>
        <li>Atualizações de segurança conforme a manutenção do projeto.</li>
        <li>Assinaturas criptográficas para ajudar a prevenir adulteração.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Alterações nesta política</h2>
      <ul>
        <li>A data de "Última atualização" será alterada quando houver revisão do texto.</li>
        <li>Versões atualizadas serão publicadas no repositório e/ou no site do projeto.</li>
        <li>Como não há perfil de usuário em servidor, não há alteração retroativa sobre dados centralizados.</li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Contato</h2>
      <p>Para dúvidas de privacidade, auditoria ou sugestões:</p>
      <ul>
        <li>
          Código-fonte:
          <a class="policy-link" href="https://github.com/sarahsec/cirabit-android" target="_blank" rel="noreferrer">
            github.com/sarahsec/cirabit-android
          </a>
        </li>
        <li>
          Abrir issue:
          <a class="policy-link" href="https://github.com/sarahsec/cirabit-android/issues" target="_blank" rel="noreferrer">
            Issues do Cirabit
          </a>
        </li>
      </ul>
    </article>

    <article class="policy-block">
      <h2>Filosofia</h2>
      <p>
        Privacidade não é só um recurso opcional. No Cirabit, ela faz parte da arquitetura: sem
        contas obrigatórias, sem dependência central para conversa e sem modelo de vigilância.
      </p>
      <p class="policy-license">
        Este texto foi adaptado da política pública de privacidade do Bitchat e customizado para o Cirabit.
      </p>
    </article>
  {/if}

  <div class="actions">
    <a class="button secondary" href={homeRoute} on:click={(event) => navigate(event, homeRoute)}>
      {content.privacyBack}
    </a>
  </div>
</section>
