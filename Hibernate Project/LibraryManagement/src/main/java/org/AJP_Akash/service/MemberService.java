package org.AJP.service;



import org.AJP.dao.MemberDAO;
import org.AJP.model.Member;
import java.util.List;

public class MemberService {
    private final MemberDAO memberDAO = new MemberDAO();

    public void registerMember(Member member) {
        memberDAO.saveMember(member);
    }

    public List<Member> getAllMembers() {
        return memberDAO.getAllMembers();
    }
}

