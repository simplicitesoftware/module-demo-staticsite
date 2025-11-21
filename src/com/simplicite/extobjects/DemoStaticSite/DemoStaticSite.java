package com.simplicite.extobjects.DemoStaticSite;

import java.io.IOException;

import com.simplicite.util.AppLog;
import com.simplicite.util.Tool;
import com.simplicite.util.tools.Parameters;

/**
 * Static frontend site
 */
public class DemoStaticSite extends com.simplicite.webapp.web.StaticSiteExternalObject {
    private static final long serialVersionUID = 1L;

    private static final String NOT_FOUND = "notfound.html";

    @Override
    public Object notfound(Parameters params) {
        AppLog.info("Not found on: " + params.getBaseLocation(), getGrant());
        try {
            if (NOT_FOUND.equals(params.getURI())) // Avoid infinite loop
                throw new IOException();

            return displayFile(NOT_FOUND);
        } catch (IOException e) {
            String m = e.getMessage();
            if (!Tool.isEmpty(m))
                AppLog.error(m, null, getGrant());
            return super.notfound(params);
        }
    }
}
