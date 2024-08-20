import { TRPCError } from '@trpc/server'
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc'

export class CustomError extends TRPCError {
    public readonly errorCode: string

    constructor(opts: {
        message?: string
        code: TRPC_ERROR_CODE_KEY
        errorCode: string
        cause?: unknown
    }) {
        super(opts)
        this.errorCode = opts.errorCode
    }
}

export const ERROR = {
    // E1xxxx 공통 에러
    /** 알 수 없는 에러가 발생했습니다. */
    E10001: new CustomError({
        errorCode: 'E10001',
        code: 'BAD_REQUEST',
        message: '알 수 없는 에러가 발생했습니다.',
    }),
    /** 0으로 나눌 수 없습니다. */
    E10002: new CustomError({
        errorCode: 'E10002',
        code: 'INTERNAL_SERVER_ERROR',
        message: '0으로 나눌 수 없습니다.',
    }),
    /** 너무 많은 요청을 보냈습니다. */
    E10003: new CustomError({
        errorCode: 'E10003',
        code: 'TOO_MANY_REQUESTS',
        message: '너무 많은 요청을 보냈습니다.',
    }),

    // E2xxxx 입력 검증 에러
    /** 잘못된 요청입니다. */
    E20001: new CustomError({
        errorCode: 'E20001',
        code: 'BAD_REQUEST',
        message: '잘못된 요청입니다.',
    }),
    /** 입력값 검증에 실패하였습니다. */
    E20002: new CustomError({
        errorCode: 'E20002',
        code: 'BAD_REQUEST',
        message: '입력값 검증에 실패하였습니다.',
    }),
    /** 동시에 요청을 보낼 수 없습니다. */
    E20003: new CustomError({
        errorCode: 'E20003',
        code: 'BAD_REQUEST',
        message: '동시에 요청을 보낼 수 없습니다.',
    }),

    // E3xxxx 인증&인가 에러
    // E30xxx 인증 에러
    /** 로그인에 실패하였습니다. */
    E30001: new CustomError({
        errorCode: 'E30001',
        code: 'BAD_REQUEST',
        message: '로그인에 실패하였습니다.',
    }),
    /** 로그인 정보가 일치하지 않습니다. */
    E30002: new CustomError({
        errorCode: 'E30002',
        code: 'BAD_REQUEST',
        message: '로그인 정보가 일치하지 않습니다.',
    }),
    /** 패스워드가 일치하지 않습니다. */
    E30003: new CustomError({
        errorCode: 'E30003',
        code: 'BAD_REQUEST',
        message: '패스워드가 일치하지 않습니다.',
    }),
    /** 패스워드 변경일자가 초과하였습니다. */
    E30004: new CustomError({
        errorCode: 'E30004',
        code: 'UNAUTHORIZED',
        message: '패스워드 변경일자가 초과하였습니다.',
    }),
    /** 로그인이 차단되었습니다. */
    E30005: new CustomError({
        errorCode: 'E30005',
        code: 'UNAUTHORIZED',
        message: '로그인이 차단되었습니다.',
    }),
    /** 사용자 데이터가 없습니다. */
    E30006: new CustomError({
        errorCode: 'E30006',
        code: 'NOT_FOUND',
        message: '사용자 데이터가 없습니다.',
    }),
    // E31xxx 토큰 에러
    /** 잘못된 토큰입니다. */
    E31001: new CustomError({
        errorCode: 'E31001',
        code: 'UNAUTHORIZED',
        message: '잘못된 토큰입니다.',
    }),
    /** 토큰이 만료되었습니다. */
    E31002: new CustomError({
        errorCode: 'E31002',
        code: 'UNAUTHORIZED',
        message: '토큰이 만료되었습니다.',
    }),
    /** 비활성화된 토큰입니다. */
    E31003: new CustomError({
        errorCode: 'E31003',
        code: 'UNAUTHORIZED',
        message: '비활성화된 토큰입니다.',
    }),
    /** 사용자 데이터가 변경되었습니다.\n다시 로그인 해주세요. */
    E31004: new CustomError({
        errorCode: 'E31004',
        code: 'UNAUTHORIZED',
        message: '사용자 데이터가 변경되었습니다.\n다시 로그인 해주세요.',
    }),
    /** 토큰이 없습니다. */
    E31005: new CustomError({
        errorCode: 'E31005',
        code: 'UNAUTHORIZED',
        message: '토큰이 없습니다.',
    }),
    // E32xxx 인가 에러
    /** 권한이 없습니다. */
    E32001: new CustomError({
        errorCode: 'E32001',
        code: 'FORBIDDEN',
        message: '권한이 없습니다.',
    }),
    /** 그룹사에서 허용하지 않은 AI 모델입니다. */
    E32002: new CustomError({
        errorCode: 'E32002',
        code: 'FORBIDDEN',
        message: '그룹사에서 허용하지 않은 AI 모델입니다.',
    }),

    // E4xxxx 파일 업로드/다운로드 에러

    // E5xxxx 비지니스 로직 에러
    // E50xxx 데이터 에러
    /** 데이터가 없습니다. */
    E50001: new CustomError({
        errorCode: 'E50001',
        code: 'NOT_FOUND',
        message: '데이터가 없습니다.',
    }),
    /** 이미 삭제된 데이터입니다. */
    E50002: new CustomError({
        errorCode: 'E50002',
        code: 'BAD_REQUEST',
        message: '이미 삭제된 데이터입니다.',
    }),
    /** 데이터가 이미 존재합니다. */
    E50003: new CustomError({
        errorCode: 'E50003',
        code: 'BAD_REQUEST',
        message: '데이터가 이미 존재합니다.',
    }),
    // E5xxx 결과 에러
    /** 업데이트에 실패하였습니다. */
    E51001: new CustomError({
        errorCode: 'E51001',
        code: 'BAD_REQUEST',
        message: '업데이트에 실패하였습니다.',
    }),

    // E6xxxx DB 에러
    /** DB 에러가 발생하였습니다. */
    E60001: new CustomError({
        errorCode: 'E60001',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'DB 에러가 발생하였습니다.',
    }),

    // E7xxxx 설정 에러

    // E8xxxx 성능 에러
    /** timeout 에러가 발생하였습니다. */
    E80001: new CustomError({
        errorCode: 'E80001',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'timeout 에러가 발생하였습니다.',
    }),
    /** 조회 최대치를 초과하였습니다.\n검색 범위를 좁혀주세요. */
    E80002: new CustomError({
        errorCode: 'E80002',
        code: 'INTERNAL_SERVER_ERROR',
        message: '조회 최대치를 초과하였습니다.\n검색 범위를 좁혀주세요.',
    }),

    // E9xxxx 외부 통신 에러
    // E90xxx 내부망 통신 에러
    /** Vault 통신 에러가 발생하였습니다. */
    E90001: new CustomError({
        errorCode: 'E90001',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Vault 통신 에러가 발생하였습니다.',
    }),
    /** DB 통신 에러가 발생하였습니다. */
    E90002: new CustomError({
        errorCode: 'E90002',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'DB 통신 에러가 발생하였습니다.',
    }),
    /** Redis 통신 에러가 발생하였습니다. */
    E90003: new CustomError({
        errorCode: 'E90003',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Redis 통신 에러가 발생하였습니다.',
    }),
    // E91xxx 그룹망 통신 에러
    /** SSO 통신 에러가 발생하였습니다. */
    E91001: new CustomError({
        errorCode: 'E91001',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'SSO 통신 에러가 발생하였습니다.',
    }),
    // E92xxx 클라우드 통신 에러
    /** Azure 통신 에러가 발생하였습니다. */
    E92001: new CustomError({
        errorCode: 'E92001',
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Azure 통신 에러가 발생하였습니다.',
    }),
}
