import React from "react";

const TerminosCondicionesForm = (props) => {
    return (
        <div className="content">
            <section>
                <svg
                    onClick={(e) => {
                        props.change(e);
                    }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
                    />
                </svg>
                <h3>TERMINOS Y CONDICIONES</h3>
                <br />
                <div className="scroll">
                    <p>
                        <strong>RED BUCAL, S.A.</strong>, es una compañía
                        legalmente constituida en la República de Panamá, bajo
                        el folio real número 155682014 y DV 8 y mantiene vigente
                        todos los permisos requeridos para operar en el país.{" "}
                        <strong>RED BUCAL, S.A.</strong> (en adelante{" "}
                        <strong>RED BUCAL</strong>) les asegura que protege y
                        asegura la confidencialidad de sus datos. La siguiente
                        Política de Confidencialidad describe el compromiso de{" "}
                        <strong>RED BUCAL</strong> de procurar mantener seguros
                        los datos personales que le proporcione, para recibir
                        los servicios que prestamos.
                    </p>
                    <br />
                    <p>
                        <strong>RED BUCAL</strong>, en el ejercicio de sus
                        actividades, ha adoptado todas las medidas necesarias
                        para garantizar la protección e integridad de los datos;
                        procurando de esta forma evitar su alteración, pérdida,
                        tratamiento o acceso no autorizado, soportado por el
                        siguiente
                    </p>
                    <br />
                    <p className="center">
                        <strong>AVISO DE PRIVACIDAD</strong>
                    </p>
                    <br />
                    <p>
                        <strong>RED BUCAL</strong>, pone a su disposición el
                        presente aviso de privacidad (el “Aviso de Privacidad”)
                        que enmarca los lineamientos que soportarán el registro
                        y trato de datos personales (“Datos Personales”) de las
                        personas naturales o jurídicas (los “Titulares”)
                        mencionadas a lo largo del presente Aviso de Privacidad.
                    </p>
                    <br />
                    <ol className="roman-number">
                        <li>
                            <p>Aceptación voluntaria y expresa. </p>
                            <br />
                            <p>
                                Los Titulares aceptan que, una vez registrados
                                en nuestra página web, aceptan irrevocablemente
                                las políticas de utilización de datos, salvo que
                                la cuenta registrada fuese eliminada, en cuyo
                                caso, los datos serán eliminados del sistema.{" "}
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Marco Normativo</p>
                            <br />
                            <p>
                                El presente Aviso de Privacidad se estructura
                                basado a lo dispuesto por la Ley 81 de 29 de
                                marzo de 2019 “sobre protección de datos
                                personales” en la República de Panamá.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Objectivo</p>
                            <br />
                            <p>
                                Este Aviso de Privacidad tiene por objetivo
                                enmarcar los alcances y condiciones generales
                                del tratamiento de Datos Personales y, hacerlos
                                de conocimiento de sus Titulares con el
                                propósito de que estos puedan tomar decisiones
                                informadas y mantengan control y disposición
                                sobre sus Datos Personales. Buscamos que
                                mediante estas políticas{" "}
                                <strong>RED BUCAL</strong> fortalezca el nivel
                                de confianza de sus Titulares.{" "}
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>
                                Domicilio <strong>RED BUCAL</strong>, S.A.
                            </p>
                            <br />
                            <p>
                                Las oficinas principales de{" "}
                                <strong>RED BUCAL</strong>, están situadas en
                                San Felipe, Casco Viejo, Calle 8va Este, PH
                                Marques del Portago, Local # 1.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Datos Personales Recabados.</p>
                            <br />
                            <p>
                                <strong>RED BUCAL</strong>, en cumplimiento de
                                lo dispuesto por la Ley 81 de 29 de marzo de
                                2019, podrá solicitar y almacenar sus Datos
                                Personales mediante las siguientes formas:{" "}
                            </p>
                            <br />
                            <ol className="letter">
                                <li>
                                    <p>Información de Titulares:</p>
                                    <br />
                                    <p>
                                        <strong>RED BUCAL</strong> manejará los
                                        datos de los beneficiarios finales de
                                        cada suscripción, sea individual o
                                        empresarial, con único propósito de
                                        visualizar en nuestro sistema si cada
                                        Titular se encuentra activo o inactivo y
                                        poder generar las activaciones en caso
                                        de que así lo amerite. Entre la
                                        información que estaremos registrando,
                                        encontraremos:{" "}
                                    </p>
                                    <br />
                                    <ul className="circle">
                                        <li>
                                            <p>
                                                Nombre del Cliente o razón
                                                social, número de identificación
                                                o RUC con dígito de
                                                verificación, lugar de
                                                domicilio, dirección, teléfonos,
                                                fax, correo electrónico, objeto
                                                social.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Nombre de la persona encargada
                                                de enviar los datos de los
                                                usuarios, teléfono corporativo y
                                                correo electrónico corporativo.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Nombre de la persona asignada
                                                para el recaudo de cartera,
                                                teléfono corporativo y correo
                                                electrónico corporativo.
                                            </p>
                                        </li>
                                    </ul>
                                    <br />
                                    <p>
                                        Igualmente, la información podrá ser
                                        utilizada para comunicarnos con los
                                        Titulares en caso que los mismos hayan
                                        quedado inactivos y así poder reactivar
                                        cualquier servicio contratado con{" "}
                                        <strong>RED BUCAL</strong>.
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>Información de los asegurados:</p>
                                    <br />
                                    <p>
                                        Es importante aclarar que la información
                                        sensitiva de los asegurados es recabada
                                        por las aseguradoras y estos informan a{" "}
                                        <strong>RED BUCAL</strong> sobre los
                                        nuevos Titulares o aquellos que hayan
                                        dejado su cobertura y por ende su
                                        afiliación con{" "}
                                        <strong>RED BUCAL</strong>. En caso de
                                        que algún asegurado requiera algún
                                        servicio adicional por parte de{" "}
                                        <strong>RED BUCAL</strong>,{" "}
                                        <strong>RED BUCAL</strong>{" "}
                                        complementaría la información brindada
                                        por la aseguradora con información
                                        adicional según el servicio requerido.
                                        En este caso, recolectamos los
                                        siguientes datos:
                                    </p>
                                    <br />
                                    <ul className="circle">
                                        <li>
                                            <p>
                                                Nombre y apellidos del titular
                                                de la póliza y sus
                                                beneficiarios.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Tipo y número de identificación.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Fecha de nacimiento o edad y
                                                género.
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Teléfonos fijos y/o celulares de
                                                contacto, correos electrónicos,
                                                dirección y lugar de residencia.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Compañía de la aseguradora a la
                                                cual pertenece.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Número de póliza o del contrato.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Condiciones del contrato de
                                                seguro.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Plan del asegurado y/o número de
                                                carnet.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Empleador del asegurado.</p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Vigencia de la póliza.</p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Historial de servicios
                                                requeridos.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Lugar donde se lleva a cabo el
                                                servicio de salud dental.{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Información de los Proveedores de
                                        servicios de salud.
                                    </p>
                                    <br />
                                    <ul className="circle">
                                        <li>
                                            <p>
                                                Nombre del prestador o razón
                                                social, número de identificación
                                                o RUC con dígito de
                                                verificación, lugar de
                                                domicilio, dirección, teléfono
                                                fijo y celular, fax, correo
                                                electrónico.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Nombre del gerente general o
                                                representante legal y dirección,
                                                ciudad, teléfono fijo y celular,
                                                fax, correo electrónico.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Número de registro médico para
                                                operar como profesional de la
                                                salud.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Horario de trabajo.</p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Fotos digitales del consultorio
                                                o clínica.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Información tributaria. </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Información bancaria que incluye
                                                nombre del titular de la cuenta
                                                bancaria, número de la cuenta
                                                bancaria y nombre o código del
                                                banco.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Hoja de vida. </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Videograbación de imagen
                                                obtenidas a través de procesos
                                                de video vigilancia.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <br />
                                <li>
                                    <p>Información de las aseguradoras.</p>
                                    <br />
                                    <ul className="circle">
                                        <li>
                                            <p>
                                                Nombre de la aseguradora o razón
                                                social, número de identificación
                                                o RUC con dígito de
                                                verificación, lugar de
                                                domicilio, dirección, teléfono
                                                fijo y celular, fax, correo
                                                electrónico.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Nombre del gerente general o
                                                representante legal y dirección,
                                                ciudad, teléfono fijo y celular,
                                                fax, correo electrónico.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Número de licencia comercial
                                                para operar un negocio de
                                                aseguradora en la República de
                                                Panamá.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Horario de trabajo.</p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>
                                                Identificación de la persona
                                                encargada de validar las listas
                                                de los Titulares dentro de las
                                                pólizas.{" "}
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            <p>Información tributaria. </p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <p>Tratamiento de Datos.</p>
                            <br />
                            <p>
                                <strong>RED BUCAL</strong> hará uso de los Datos
                                Personales únicamente para las siguientes
                                finalidades:
                            </p>
                            <br />
                            <ol>
                                <li>
                                    <p>
                                        Sustentar y responsabilizarse por la
                                        ejecución de las relaciones existentes
                                        entre RED BUCAL y todos los involucrados
                                        dentro de la cadena de valor para la
                                        prestación de los servicios, incluyendo
                                        pago y cobranza de las obligaciones
                                        contractuales. Entre estos involucrados
                                        tenemos principalmente: Titulares,
                                        asegurados, proveedores de servicios de
                                        salud, aseguradoras.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Conectar efectivamente a los titulares
                                        con las clínicas que proveerán
                                        directamente los servicios médicos
                                        requeridos por estos.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Garantizar que los titulares recibirán
                                        efectivamente la atención por parte de
                                        los proveedores de servicios médicos que
                                        conforman la red; estar atento a
                                        cualquier problema que pueda haber entre
                                        el prestador de servicio médico y su
                                        inhabilidad de visualizar en sistema la
                                        membresía del titular.
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Dotar a cada una de las clínicas de los
                                        proveedores de servicios de salud de un
                                        portal en donde puedan visualizar los
                                        datos de cada Titular, de manera tal que
                                        puedan verificar de forma rápida y
                                        sencilla si la membresía está activa,
                                        así como los beneficios que mantiene
                                        vigentes.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Realizar encuestas de satisfacción para
                                        medir la calidad de servicio que se
                                        recibe a través de los proveedores de
                                        servicios de salud y la experiencia con
                                        la plataforma de la web.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Comunicar nuevos productos, servicios
                                        y/o cambios de sobre los existentes.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Ventilar cualesquiera disconformidades
                                        que puedan existir ante un servicio
                                        prestado.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Realizar reportes de todo tipo,
                                        administrativos, contables, comerciales,
                                        estadísticos, facturación y todos
                                        aquellos que permitan generar nuevas
                                        estrategias en todas las áreas del
                                        modelo de negocio.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Envío de mensajes para promover nuevos
                                        productos, servicios y/o promociones.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Contactar a los involucrados por
                                        cualquier aspecto relativo a la relación
                                        existente entre estos.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Llevar registro de clientes inactivos de
                                        RED BUCAL.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Colaboración con entidades estatales
                                        sobre información requerida por orden
                                        judicial.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Todo lo necesario para llevar de forma
                                        eficiente el manejo de sistemas de
                                        información y comunicación, generación
                                        de archivos y copias de seguridad de la
                                        información contenida en dichos
                                        sistemas.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Control y prevención de fraudes y lavado
                                        de activos.{" "}
                                    </p>
                                </li>
                                <br />
                                <li>
                                    <p>
                                        Implementación de protocolos de
                                        seguridad de la infraestructura e
                                        instalaciones de RED BUCAL.{" "}
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <br />
                        <li>
                            <p>Uso Especial de Datos Personales</p>
                            <br />
                            <p>
                                <strong>RED BUCAL</strong> solicita regularmente
                                datos personales con el propósito de generar la
                                conexión eficiente con los proveedores de
                                servicios de salud odontológica. No obstante,
                                las historias médicas de cada Titular quedarán
                                únicamente en los registros de cada clínica y
                                estás solicitarán en caso de ser diferentes, la
                                apertura de un expediente individual por
                                clínica. Los datos que{" "}
                                <strong>RED BUCAL</strong> mantendrá serán
                                genéricos y sobre las unidades de atención
                                realizadas, sin especificar los detalles
                                clínicos de cada consulta.{" "}
                            </p>
                            <br />
                            <p>
                                Absolutamente todos los datos serán utilizados
                                con la máxima confidencialidad posible, como si
                                fueran datos confidenciales propios de{" "}
                                <strong>RED BUCAL</strong>. Se garantiza
                                especial cuidado y responsabilidad en el
                                tratamiento de los datos y que se ha
                                implementado altos niveles de seguridad de la
                                información, restricciones de acceso y uso de
                                los datos.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>
                                Derecho de Acceso, Rectificación, Cancelación u
                                Oposición.
                            </p>
                            <br />
                            <p>
                                Todo lo relativo a este proceso podrá ser
                                ejercido según lo dispuesto en la Ley 81 de
                                2019. Para hacerlo, deberá solicitarlo vía
                                correo electrónico a la dirección{" "}
                                <a href="mailto:info@redbucal.com">
                                    info@redbucal.com
                                </a>
                                , detallando la información del titular de la
                                cuenta, copia de identificación de este; o de su
                                representante, en cuyo caso, dicha
                                identificación deberá estar acompañada de la
                                autorización respectiva debidamente notariada
                                con la firma de dos testigos. El Titular deberá
                                detallar en su solicitud la información puntual
                                sobre la cual desea ejercer los derechos
                                respectivos. <strong>RED BUCAL</strong>{" "}
                                procederá a realizar modificaciones o
                                correcciones cuando los datos sean erróneos,
                                inexactos, equívocos o incompletos dentro del
                                término de diez (10) días hábiles siguientes a
                                la presentación de la solicitud de corrección.
                                Igualmente podrá <strong>RED BUCAL</strong>{" "}
                                eliminar, modificar o bloquear los datos
                                personales sin necesidad de requerimiento cuando
                                exista prueba de inexactitud de dichos datos.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Revocación del Consentimiento.</p>
                            <br />
                            <p>
                                El titular podrá revocar en cualquier momento el
                                consentimiento otorgado mediante los presentes
                                términos y condiciones, sin que esto genere
                                efectos retroactivos a dicha revocatoria.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Prestación de servicios de Salud</p>
                            <br />
                            <p>
                                Los Titulares al aceptar estos términos y
                                condiciones aceptan que{" "}
                                <strong>RED BUCAL</strong> no es, ni será
                                responsable por los servicios médicos prestados,
                                toda vez que este no es en sí un establecimiento
                                que presta directamente servicios médicos. Cada
                                proveedor será responsable por los servicios
                                médicos que reciban los Titulares y este acepta
                                y exime completamente de responsabilidad a{" "}
                                <strong>RED BUCAL</strong> por algún daño o
                                perjuicio que haya sufrido en virtud.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Cambios a los Términos y Condiciones.</p>
                            <br />
                            <p>
                                <strong>RED BUCAL</strong> se reserva entero
                                derecho a efectuar en cualquier momento cambios,
                                modificaciones o actualizaciones al presente
                                compendio de Términos y Condiciones para
                                mantenernos en cumplimiento a cualquier reforma
                                legal, políticas de la empresa o cambios en la
                                forma de la prestación del servicio. Dichas
                                reformas serán comunicadas a los Titulares
                                mediante los medios digitales de comunicaciones
                                existentes, así como en la web{" "}
                                <a
                                    href="http://www.redbucal.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.redbucal.com
                                </a>
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>Políticas de Cookies</p>
                            <br />
                            <p>
                                Las cookies son archivos de texto que son
                                almacenados en el equipo de cómputo o en el
                                teléfono móvil inteligente (smartphone)
                                utilizado por el Titular al hacer uso del Portal
                                Electrónico. Las web beacons suelen ser pequeñas
                                imágenes de un pixel por un pixel, visibles o
                                invisibles colocadas dentro del código fuente
                                del Portal Electrónico o en un correo
                                electrónico.
                            </p>
                            <br />
                            <p>
                                Las cookies y las web beacons ayudan a{" "}
                                <strong>RED BUCAL</strong> a brindarle al
                                Titular una mejor experiencia cuando utiliza el
                                Portal Electrónico y le permiten mejorar dicha
                                experiencia. <strong>RED BUCAL</strong> usa
                                cookies para analizar el flujo de información,
                                personalizar sus servicios, el contenido y la
                                publicidad, medir la efectividad promocional y
                                promover la confianza y seguridad en dicho
                                portal, recordar las preferencias de los
                                Titulares y poner a su disposición los valores
                                predeterminados de las funciones del Portal
                                Electrónico configuradas por{" "}
                                <strong>RED BUCAL</strong>, así como adaptar
                                eventualmente las herramientas más relevantes
                                para los Titulares.
                            </p>
                            <br />
                            <p>
                                En ese sentido, a través de las cookies y las
                                web beacons se podrán obtener datos personales
                                del Titular. Cada Titular puede aceptar o
                                rechazar el uso de cookies mediante la
                                configuración para tal efecto en su equipo de
                                cómputo o smartphone utilizado, sin embargo, es
                                importante que los Titulares tengan en cuenta
                                que, si no aceptan el uso de cookies, algunas
                                funciones del Portal Electrónico pueden no estar
                                plenamente disponibles, debido a que algunos de
                                los servicios o contenido del propio Portal
                                Electrónico únicamente están disponibles
                                mediante el uso de cookies.
                            </p>
                            <br />
                            <p>
                                El Titular podrá desactivar el uso de cookies
                                siguiendo para tal efecto el procedimiento
                                señalado en la configuración del navegador,
                                equipo de cómputo y/o smartphone que utilice
                                para navegar en el Portal Electrónico.
                            </p>
                            <br />
                            <p>
                                Mediante la aceptación de los Términos y
                                Condiciones, el Titular otorga expresamente su
                                consentimiento para el tratamiento de sus Datos
                                Personales de conformidad con lo contenido en el
                                mismo.
                            </p>
                            <br />
                            <p>
                                Términos y Condiciones establecidos el 4 de
                                febrero de 2021.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>

            <style jsx>{`
                .terminos {
                    margin-top: 10px;
                    display: grid;
                    justify-items: center;
                    font-weight: 800;
                    grid-template-columns: 1fr 20px 40px;
                    justify-items: flex-end;
                }

                .checkbox {
                    transform: translateY(25%);
                }

                .content {
                    z-index: 1000;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    background: #33333366;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                section {
                    height: 500px;
                    width: 350px;
                    background: white;
                    position: relative;
                    border-radius: 30px;
                    padding: 30px;
                }

                svg {
                    width: 30px;
                    color: var(--puntoRojo);
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    cursor: pointer;
                    transition: transform 0.5s;
                }

                svg:hover {
                    transform: scale(1.1);
                }

                h3 {
                    text-align: center;
                    font-weight: 400;
                }

                p {
                    font-size: 12px;
                    text-align: justify;
                }

                .scroll {
                    height: 450px;
                    overflow: auto;
                    padding: 0 10px;
                }

                .center {
                    text-align: center;
                }

                .roman-number {
                    margin-left: 20px;
                    list-style-type: upper-roman;
                }

                .letter {
                    margin: 20px;
                    list-style-type: lower-alpha;
                }

                .circle {
                    margin-left: 20px;
                    list-style-type: disc;
                }
            `}</style>
        </div>
    );
};

export default TerminosCondicionesForm;
