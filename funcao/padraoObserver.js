/*
 * Aula-Extra: Padrão de Projeto mais importante da Web.
 * Resposta: Padrão Observer.
 * Por que OBSERVER?
 * Web => Javascript => Padrão Observer
 * Ajax (Técnica de Comunicação assíncrona) => Padrão Observer
 *
 * Padrão Observer:
 *  - Event Handler => Javascript
 *  - Listener - Java
 *  - C++
 *  - PHP
 *  - Ruby
 *  - Swift
 *
 * Exemplo: Aniversário Surpresa
 *
 *  - Os personagens:
 *      - A namorada
 *      - O porteiro
 * - O evento:
 *      - A chegada do aniversariante
 *
 * - Uma história:
 *      - Duas possiblidades:
 *          - Sem observer
 *              - A nomorada espera o namorado chegar
 *          - Com observer
 *              - O porteiro avisa a namorada quando o
 *                aniversariante chegar
 *
 * - Exemplo tecnológico:
 *      - Requisições HTTP Síncrono X HTTP Assíncrono
 *          - Requisição HTTP Síncrono
 *              - A página da Web será travada esperando a
 *                resposta
 *          - Requisição HTTP Assíncrona
 *              - A página da Web executará outras ações até
 *                a notificação do evento chegar e executar as
 *                ações dedicadas.
 *
 *
 * - Aniversariante Surpresa
 *      - AniversarianteSurpresa
 *      - ChegadaAniversarianteEvent
 *      - ChegadaAniversarianteObserver
 *      - Namorada
 *      - Porteiro
 *
 * public class ChegadaAniversariante{
 *
 * }
 *
 */